import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import {DatePipe} from '@angular/common';

export interface SampleData {
  id: number;
  name: string;
  profession: string;
  birthday: any;
  gender: string;
  country: string;
}

const ELEMENT_DATA: SampleData[] = [
   {id: 1, name: 'Lawrence Philip Enriquez', profession: 'Software Engineer', 
   birthday: new Date('10/23/1993'), gender: 'Male', country: 'Philippines'},
   {id: 2, name: 'Lawrence Philip Enriquez', profession: 'Software Engineer', 
   birthday: new Date('10/23/1993'), gender: 'Male', country: 'Philippines'},
   {id: 3, name: 'Lawrence Philip Enriquez', profession: 'Software Engineer', 
   birthday: new Date('10/23/1993'), gender: 'Male', country: 'Philippines'}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  displayedColumns: string[] = ['id', 'name', 'profession', 'birthday', 'gender', 'country', 'action'];
  dataSource = ELEMENT_DATA;
  count: number = 4;

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
    this.dataSource.push({
      id:this.count++,
      name:row_obj.name,
      profession:row_obj.profession,
      birthday:row_obj.birthday,
      gender:row_obj.gender,
      country:row_obj.country,
    });
    this.mytable.renderRows();
    console.log(row_obj.birthday);
    
  }

  updateRowData(row_obj:any){
    this.dataSource = this.dataSource.filter((value,key)=>{
      if(value.id == row_obj.id){
        value.name = row_obj.name;
        value.profession = row_obj.profession;
        value.birthday = row_obj.birthday;
        value.gender = row_obj.gender;
        value.country = row_obj.country;
      }
      return true;
    });
    console.log(row_obj.birthday);
  }

  deleteRowData(row_obj:any){
    this.dataSource = this.dataSource.filter((value,key)=>{
      return value.id != row_obj.id;
    });
  }

}
