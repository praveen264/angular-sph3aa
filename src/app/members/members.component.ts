import { Component, OnInit,Injector } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  constructor(private router:Router) { }
  
  datas=[
    {id:"QWERT",name:"W.e.trivedi"}
  ];

  ngOnInit() {
  if(localStorage.getItem('username')=='')
  {
    this.router.navigate(['/login']);
  }
  }
  
}