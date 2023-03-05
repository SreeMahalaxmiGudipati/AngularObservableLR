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
  displayMsg:string='';
  isAccountCreated: boolean=false;
  data: any;
  

   constructor(private userservice:UserService){
    this.getData();
   }

   public registerForm =new FormGroup({
    Name:new FormControl(''),
    Phone:new FormControl(),
    pass:new FormControl('')
  });
    
  ngOnInit() : void{
    this.getData();
    }

  registerSubmitted(){
      
              this.userservice.registerUser([
                this.registerForm.value.Name,
                this.registerForm.value.Phone,
                this.registerForm.value.pass
            ]).subscribe((res: any)=>{
              if(res==''){
                this.displayMsg='Something wrong';
                console.log(res);
                this.isAccountCreated=true;
                this.getData();
              }
              else {
              
                this.displayMsg='Account created successfully';
                console.log(res);
                this.isAccountCreated=false;
                this.getData();
              }
      });
   }

  

  getData()
  {
    this.userservice.getAllStudents().subscribe((data: any)=>
    {
      this.data=data;
      // console.log(this.data);
    })
  }
   
  DeleteStudentinfo(id:any){
    this.userservice.DeleteStudent(id).subscribe((data:any)=>
    {
      // console.log(data);
    alert("Student details Deleted");
    this.getData(); 
    })
  }

   



 
  
}
