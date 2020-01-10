import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private routes:Router) { }

  ngOnInit() {
  }
   check(u1,p1)
   {
     if( localStorage.getItem("username")==null)
     {
    //  alert(u1+"<br>"+p1);
     if(u1=='praveen264' && p1=='pramod@12345')
     {
       this.routes.navigate(['/members']);
       localStorage.setItem("username",u1);
     }
     }
   }
}