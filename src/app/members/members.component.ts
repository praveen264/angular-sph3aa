import { Component, OnInit,Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
getdatas:string[]=[];
  private url:string = "api/datas.json";
   
  constructor(private http: HttpClient) { }


  ngOnInit() {
    this.view();
  }
   view()
   {
    
  return  this.http.get(this.url).subscribe((data: any[]) => {
     
      console.log(data);

      this.getdatas = data;

      console.log(this.getdatas);
      // reverse method is used to store the datas in reverse order
    });
   }
}