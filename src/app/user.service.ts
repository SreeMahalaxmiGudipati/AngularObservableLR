import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl ="https://localhost:7068/api/";
  constructor(private http:HttpClient) { }

  
 getAllStudents(){
  this.http.get(this.baseUrl).subscribe((
    resultData:any)=>
    {
      
    });
 }

}
