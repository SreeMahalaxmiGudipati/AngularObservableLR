import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Observable} from 'rxjs';
import { Student } from './models/student.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl ="https://localhost:7068/api/Students";
  constructor(private http:HttpClient) { }

  
 getAllStudents() : Observable<Student[]>  {
  return this.http.get<Student[]>(this.baseUrl);
 }

}
