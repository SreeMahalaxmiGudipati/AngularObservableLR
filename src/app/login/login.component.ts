import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student.model';
import { UserService } from '../user.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  name: any;
  pass: any;
  data:any;
  students: any ;
  displayMsg:string='';
  isUserLogged: boolean=false;


   constructor(private userservice:UserService,private router:Router){
        this.getData();
   }

   public LoginForm =new FormGroup({
    Name:new FormControl(''),
    Pass:new FormControl()
  });

  getData()
  {
    this.userservice.getAllStudents().subscribe((data: any)=>
    {
      this.data=data;
       this.students=this.data;
       console.log(this.students);
    })
  }

  //  loginSubmitted(){
  //            console.log(this.LoginForm.value);
  //            this.userservice.loginUser(this.LoginForm.value).subscribe({
  //             next:(res)=>{
  //               console.log("logged in");
  //               console.log(res);
  //             },
  //             error:(err)=>{
  //               console.log("login failed");
  //             }

  //            });
  //  }

  loginSubmitted(){
    const user = this.students.find( (x: { name: any; password: any; }) => x.name === this.LoginForm.value.Name && x.password === this.LoginForm.value.Pass);
 //   console.log(this.students);
    console.log(user);
    if (!user) {
      console.log("logged failed");
      this.displayMsg='User Not Found';
    } else{
      this.displayMsg='User Logged successfully';
      console.log("login success");
      this.isUserLogged=true;
    this.router.navigate(['/viewdetails/'+user.id]);
    }
  }
  
}
