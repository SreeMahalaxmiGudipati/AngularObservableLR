import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.css']
})
export class ViewdetailsComponent implements OnInit{
  data:any;
  id:any;
  constructor(private route:ActivatedRoute,private userservice:UserService){}
  
  
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
}
