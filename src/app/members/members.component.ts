import { Component, OnInit,Injector } from '@angular/core';
import {Router} from '@angular/router';
import { Injectable } from '@angular/core';
import { ConfigService } from '../config.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  constructor(private router:Router,private http:HttpClient,private config: ConfigService) { }
  getdatas:any;


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
    id:"wewewe",
     name:"swijwjojeii"
   };
   this.config.getData()
      .subscribe(data => {
        console.log(data);
      });
 return  this.config.postData();
  }

}