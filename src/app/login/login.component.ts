import { Component } from '@angular/core';
import { Student } from '../models/student.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
    UserIsValid:boolean=false;
    http: any;
username: any;
pass: any;

   constructor(private userservice:UserService){}

   loginSubmitted(){

   }
  
  
}
