import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  students:Student[]=[];

   constructor(private userservice:UserService){}

   ngOnInit() : void{
    this. getallStudents();
   }

   getallStudents(){
    this.userservice.getAllStudents().subscribe(res=>
      {
       this.students=res;
       console.log(this.students);
      });
   }
   
}
