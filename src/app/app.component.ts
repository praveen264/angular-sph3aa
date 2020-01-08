import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  datas=[
    {name:"Praveen Kumar Trivedi"},
    {name:"Shubham Kumar Trivedi"}
  ];
}
