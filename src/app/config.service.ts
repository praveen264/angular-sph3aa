import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ConfigService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('/assets/db.json');
    
  }
  
  
}