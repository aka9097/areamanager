import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/address/address';
import { Location } from 'src/app/location/location';
import { RestService } from 'src/app/rest.service';
import { User } from 'src/app/user/user';
import { Genie } from '../genie';

@Component({
  selector: 'app-addgenie',
  templateUrl: './addgenie.component.html',
  styleUrls: ['./addgenie.component.css']
})
export class AddgenieComponent implements OnInit {

  date:Date = new Date;
  location!:Location;
  address!:Address;
  user:User =new User(0,0,"","","",0,"USER",this.location,[],this.address);
  //user1=this.user as User;
 // user1:User= new User(this.user.id,this.user.aadhar,this.user.userName,this.user.email,this.user.password,this.user.phone,this.user.role,this.user.location,this.user.genie,this.user.address)
 user1:any;
  message!:Genie;

  genie:Genie = new Genie(0,"","","",this.date,false,[this.user]);
  
  

  constructor(private service:RestService) { }

  ngOnInit(): void {
    //this.user=new User(0,0,"","","",0,"USER",this.location,[],this.address);
    let resp=this.service.getCurrentUser();
    resp.subscribe((data)=>this.user=data);

  }

 

  public raiseGenie()
  {
    let resp=this.service.raisegenie(this.genie,this.user.email);
    resp.subscribe((data)=>this.genie=data);
    this.displayMessage();
    

  }
  public displayMessage()
  {
    alert("Genie Raised Successfully")
  }

}
