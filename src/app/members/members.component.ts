import { Component, OnInit,Injector } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  constructor() { }
  
  datas=[
    {id:"QWERT",name:"W.e.trivedi"}
  ];

  ngOnInit() {
  
  }
  
}