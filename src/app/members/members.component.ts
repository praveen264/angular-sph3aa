import { Component, OnInit,Injector } from '@angular/core';
import {Router} from '@angular/router';
import { Injectable } from '@angular/core';
import { ConfigService } from '../config.service';
import { Observable } from "rxjs/Observable";

import "rxjs/add/operator/map";
import "rxjs/add/operator/do";

import { HttpClient, HttpHeaders } from '@angular/common/http';
export type User = {
 
  id: number,
  name:string
}

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  constructor(private router:Router,private http:HttpClient,private config: ConfigService) { }
  getdatas:string[]='';
   

  ngOnInit() {
      if(localStorage.getItem('username')==null)
      {
        this.router.navigate(['/login']);
      }
      this.view();
  }
  view()
  {
   const req={
    id:"qwq3qa",
     name:"pktrivedi"
   };
  
   this.config.getData()
      .subscribe(data => {
     this.getdatas=data;
     
      console.log(data);
      });
    return this.http.post('https://angular-sph3aa.stackblitz.io/assets/db.json',req
).map((data:any[])=>{
  this.getdatas=data;
});
   
  }
 

}