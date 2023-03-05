import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../models/student.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  student = new Student();
  students=[];
  currentStudentID=[];

  route: any;
  activeindex: any;
  data: any;


   constructor(private userservice:UserService){
    
   }

  getData()
  {
    this.userservice.getAllStudents().subscribe((data: any)=>
    {
      this.data=data;
      console.log(this.data);
    })
  }
   
  DeleteStudentinfo(id:any){
    this.userservice.DeleteStudent(id).subscribe((data:any)=>
    {
      console.log(data);
    alert("Student details Deleted");
    this.getData(); 
    })
  }

   ngOnInit() : void{
   this.getData();
   }



 
  
}
