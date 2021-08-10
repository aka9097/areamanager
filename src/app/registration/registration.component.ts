import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from '../address/address';
import { Location } from '../location/location';
import { RestService } from '../rest.service';
import { User } from '../user/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
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
  }

  public registerUser(){

    // this.service.addaddress(this.address);
    let resp=this.service.adduser(this.user);

    resp.subscribe((data)=>this.message=data);
    if(resp)
    {
      alert("Registration Successfull")
    }

    this.router.navigate(["/login"])



  }

}
