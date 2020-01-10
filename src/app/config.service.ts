import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('/assets/db.json');
    
  }
  postData()
  {
     return  this.http.post('/assets/db.json',{id:"hdjhs",name:"kjsdjskdjkdj"})
      .subscribe((data: any[]) => {
          console.log(data);
      });
  }
  
}