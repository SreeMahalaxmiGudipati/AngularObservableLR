import { Component } from '@angular/core';
import { Student } from '../models/student.model';
import { UserService } from '../user.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


   constructor(private userservice:UserService){}
   public LoginForm =new FormGroup({
    Name:new FormControl(''),
    Pass:new FormControl()
  });
   loginSubmitted(){
             console.log(this.LoginForm.value);
             this.userservice.loginUser(this.LoginForm.value).subscribe({
              next:(res)=>{
                console.log("logged in");
                
              }
             });
   }
  
  
}
