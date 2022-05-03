import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';

export interface SampleData {
  id: number;
  name: string;
  birthday: string;
  gender: string;
  country: string;
  languages: string;
}

const ELEMENT_DATA: SampleData[] = [
   {id: 1, name: 'Lawrence Philip Enriquez', birthday: '10/23/1993', 
   gender: 'Male', country: 'Philippines', languages: '.NET Framework,PHP'},
   {id: 2, name: 'Lawrence Philip Enriquez', birthday: '10/23/1993', 
   gender: 'Male', country: 'Philippines', languages: '.NET Framework,PHP'},
   {id: 3, name: 'Lawrence Philip Enriquez', birthday: '10/23/1993', 
   gender: 'Male', country: 'Philippines', languages: '.NET Framework,PHP'}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayedColumns: string[] = ['id', 'name', 'birthday', 'gender', 'country', 'languages', 'action'];
  dataSource = ELEMENT_DATA;

  @ViewChild('mytable', {static: true}) mytable:any;

  constructor(public dialog: MatDialog) {}

  openDialog(action: any, obj: { action: any; }) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '400px',
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
      name:row_obj.name,
      birthday:row_obj.birthday,
      gender:row_obj.gender,
      country:row_obj.country,
      languages:row_obj.languages
    });
    this.mytable.renderRows();
    
  }

  updateRowData(row_obj:any){
    this.dataSource = this.dataSource.filter((value,key)=>{
      if(value.id == row_obj.id){
        value.name = row_obj.name;
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
