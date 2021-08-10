import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from 'src/app/address/address';
import { Location } from 'src/app/location/location';
import { RestService } from 'src/app/rest.service';
import { User } from '../user';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  user1!:User;
  address:Address=new Address(0,0,"","",this.user1);
  location:Location=new Location(0,"","","","",0,[]);
  user:User=new User(0,0,"","","",0,"USER",this.location,[],this.address);

  message:any;
  location1 !:any;

  constructor(private service:RestService,private router:Router) { }

  ngOnInit(): void {
    let resp=this.service.getLocation();

    resp.subscribe((data)=>this.location1=data);

    console.log(this.location1);



    let resp1=this.service.getCurrentUser();
      resp1.subscribe((data)=>this.user=data);
  }

  public update(){
    let resp=this.service.updateUser(this.user,this.user.email);
    resp.subscribe((data)=>this.message=data);
    
       alert("update Successfull")
       this.router.navigate(["/userdashboard"])
    

  }

}
