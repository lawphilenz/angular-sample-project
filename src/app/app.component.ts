import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import {DatePipe} from '@angular/common';

export interface SampleData {
  id: number;
  firstName: string;
  lastName: string;
  birthday: any;
  gender: string;
  country: string;
}

const ELEMENT_DATA: SampleData[] = [
   {id: 1, firstName: 'Lawrence Philip', lastName: 'Enriquez', birthday: new Date(), 
   gender: 'Male', country: 'Philippines'},
   {id: 2, firstName: 'Lawrence Philip', lastName: 'Enriquez', birthday: new Date(), 
   gender: 'Male', country: 'Philippines'},
   {id: 3, firstName: 'Lawrence Philip', lastName: 'Enriquez', birthday: new Date(), 
   gender: 'Male', country: 'Philippines'}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'birthday', 'gender', 'country', 'action'];
  dataSource = ELEMENT_DATA;

  @ViewChild('mytable', {static: true}) mytable:any;

  constructor(public dialog: MatDialog, private datePipe: DatePipe) {}

  openDialog(action: any, obj: { action: any; }) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '345px',
      data:obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Add'){
        this.addRowData(result.data);
      }else if(result.event == 'Update'){
        this.updateRowData(result.data);
      }else if(result.event == 'Delete'){
        this.deleteRowData(result.data);
      }
    });
  }

  addRowData(row_obj:any){
    var d = new Date();
    this.dataSource.push({
      id:d.getTime(),
      firstName:row_obj.firstName,
      lastName:row_obj.lastName,
      birthday:row_obj.birthday,
      gender:row_obj.gender,
      country:row_obj.country,
    });
    this.mytable.renderRows();
    
  }

  updateRowData(row_obj:any){
    this.dataSource = this.dataSource.filter((value,key)=>{
      if(value.id == row_obj.id){
        value.firstName = row_obj.firstName;
        value.birthday = row_obj.birthday;
      }
      return true;
    });
  }

  deleteRowData(row_obj:any){
    this.dataSource = this.dataSource.filter((value,key)=>{
      return value.id != row_obj.id;
    });
  }

}
