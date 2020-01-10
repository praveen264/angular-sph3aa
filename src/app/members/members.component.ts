import { Component, OnInit,Injector } from '@angular/core';
import {Router} from '@angular/router';
import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable()
@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  constructor(private router:Router,private http:HttpClient) { }
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
    this.http.get('/api/db.json').subscribe(data=>{
      this.getdatas=data;
      console.log(this.getdatas);
    });
  }
}