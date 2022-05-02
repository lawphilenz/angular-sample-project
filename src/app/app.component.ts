import { Component } from '@angular/core';

export interface PeriodicElement {
  position: number;
  name: string;
  birthday: string;
  gender: string;
  country: string;
  languages: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
   {position: 1, name: 'Lawrence Philip Enriquez', birthday: '10/23/1993', 
   gender: 'Male', country: 'Philippines', languages: '.NET Framework,PHP'},
   {position: 2, name: 'Lawrence Philip Enriquez', birthday: '10/23/1993', 
   gender: 'Male', country: 'Philippines', languages: '.NET Framework,PHP'},
   {position: 3, name: 'Lawrence Philip Enriquez', birthday: '10/23/1993', 
   gender: 'Male', country: 'Philippines', languages: '.NET Framework,PHP'},
   {position: 4, name: 'Lawrence Philip Enriquez', birthday: '10/23/1993', 
   gender: 'Male', country: 'Philippines', languages: '.NET Framework,PHP'},
   {position: 5, name: 'Lawrence Philip Enriquez', birthday: '10/23/1993', 
   gender: 'Male', country: 'Philippines', languages: '.NET Framework,PHP'},
   {position: 6, name: 'Lawrence Philip Enriquez', birthday: '10/23/1993', 
   gender: 'Male', country: 'Philippines', languages: '.NET Framework,PHP'},
   {position: 7, name: 'Lawrence Philip Enriquez', birthday: '10/23/1993', 
   gender: 'Male', country: 'Philippines', languages: '.NET Framework,PHP'},
   {position: 8, name: 'Lawrence Philip Enriquez', birthday: '10/23/1993', 
   gender: 'Male', country: 'Philippines', languages: '.NET Framework,PHP'},
   {position: 9, name: 'Lawrence Philip Enriquez', birthday: '10/23/1993', 
   gender: 'Male', country: 'Philippines', languages: '.NET Framework,PHP'},
   {position: 10, name: 'Lawrence Philip Enriquez', birthday: '10/23/1993', 
   gender: 'Male', country: 'Philippines', languages: '.NET Framework,PHP'}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayedColumns: string[] = ['position', 'name', 'birthday', 'gender', 'country', 'languages'];
  dataSource = ELEMENT_DATA;
}
