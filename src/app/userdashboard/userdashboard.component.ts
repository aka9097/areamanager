import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { Address } from '../address/address';
import { Genie } from '../Genie/genie';
import { Location } from '../location/location';
import { RestService } from '../rest.service';
import { User } from '../user/user';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {
 
  user1!:User;
  address:Address=new Address(0,0,"","",this.user1);
  location:Location=new Location(0,"","","","",0,[]);
 
  user:User=new User(0,0,"","","",0,"USER",this.location,[],this.address);

genie:Genie[]=[];
message:any

  

  constructor(private service:RestService ,private router: Router) { }


 
  ngOnInit(): void {
 
      let resp=this.service.getCurrentUser();
      resp.subscribe((data)=>this.user=data);

      setTimeout(()=>{
          let resp1=this.service.getGeniesOfPerticularLocation(this.user.email);
           resp1.subscribe((data)=>this.genie=data);


      },100);
     

      //  let resp1=this.service.getGeniesOfPerticularLocation(this.user.location.id);
      // resp1.subscribe((data)=>this.genie=data);


  }

  route() {
    this.router.navigate(['/readgenie'], {queryParams: {user2: this.user.email}});
  }

 

  ngOnInit1(): void {
 
     let resp1=this.service.getGeniesOfPerticularLocation(this.user.email);
    resp1.subscribe((data)=>this.genie=data);

}

public logout()
{
  let resp1=this.service.logout();
  resp1.subscribe((data)=>this.message=data);
  console.log(this.message)
}

}
