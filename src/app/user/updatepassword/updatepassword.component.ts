import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from 'src/app/address/address';
import { Location } from 'src/app/location/location';
import { RestService } from 'src/app/rest.service';
import { User } from '../user';

@Component({
  selector: 'app-updatepassword',
  templateUrl: './updatepassword.component.html',
  styleUrls: ['./updatepassword.component.css']
})
export class UpdatepasswordComponent implements OnInit {
  // password!:""
  // user1!:User;
  // address:Address=new Address(0,0,"","",this.user1);
  // location:Location=new Location(0,"","","","",0,[]);
 
  // user:User=new User(0,0,"","","",0,"USER",this.location,[],this.address);

  status:boolean=false;

  password!:"";
  password1!:"";
  password2!:"";
  password3!:"";
  user1!:User;
  address:Address=new Address(0,0,"","",this.user1);
  location:Location=new Location(0,"","","","",0,[]);
  message!:string;
  message1!:string;
  userPassword!:string;
  user:User=new User(0,0,"","","",0,"USER",this.location,[],this.address);

  constructor(private service:RestService,private router:Router) { }

  ngOnInit(): void {
 
    let resp=this.service.getCurrentUser();
    resp.subscribe((data)=>this.user=data);

  }

  // public update()
  // {
  //   let resp=this.service.updateUserPassword(this.user,this.user.email);
  //   resp.subscribe((data)=>this.user=data);
  // }

  public update()
  {
    if(this.password3==this.password1){
      // let resp1=this.service.getCurrentUser();
      // resp1.subscribe((data)=>this.user=data);
      this.user.password=this.password3;
    let resp=this.service.updateUserPassword(this.user,this.user.email);
    resp.subscribe((data)=>this.user=data);
    alert("Password Updated")
    this.router.navigate(["/userdashboard"])
    }
    else{
      this.message1="password mismatch";
      alert(this.message1)
    }
  }

  public checkPassword()
  {
    // let resp=this.service.getCurrentUser();
    // resp.subscribe((data)=>this.user=data);
    this.password=this.password2;
    if(this.password==this.user.password){
    this.message="you can change your password";
    alert(this.message)
    this.status=true;
    this.password="";

    }
    else{
    this.message="entered password is wrong please reenter again"
    alert(this.message)
    this.password="";
    }
  }

}
