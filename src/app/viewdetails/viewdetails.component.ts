import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';

@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.css']
})
export class ViewdetailsComponent implements OnInit{
  data:any;
  id:any;
  constructor(private route:ActivatedRoute,private userservice:UserService,private toastr:ToastrService,private router:Router){}
  
  
  ngOnInit(){
    this.id=this.route.snapshot.params['id'];
    this.getInfoById();
  }
  
    getInfoById(){
      this.userservice.getDetailsById(this.id).subscribe((data:any)=>
      {
        this.data=data;
        console.log(this.data);
      })
    }

    logOut() {
      localStorage.removeItem('user');
      localStorage.clear();
      this.toastr.error('User Logged Out Successfully');
      this.router.navigate(['/parent/login']);
    }
}
