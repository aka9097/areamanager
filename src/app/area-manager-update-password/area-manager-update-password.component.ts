import { Component, OnInit } from '@angular/core';
import { AreaManagerService } from '../area-manager.service';
import { User } from '../user';

@Component({
  selector: 'app-area-manager-update-password',
  templateUrl: './area-manager-update-password.component.html',
  styleUrls: ['./area-manager-update-password.component.css']
})
export class AreaManagerUpdatePasswordComponent implements OnInit {
status:boolean=false;
user:User;
userPassword:string;
password:"";
password1!:"";
password2!:"";
password3!:"";
message!:string;
message1!:string;
  constructor(private service:AreaManagerService) { }

  ngOnInit(): void {
    let resp=this.service.getCurrentUser();
    resp.subscribe((data)=>this.user=data);
    this.userPassword=this.user.password;
  }

  public update()
  {
    if(this.password3==this.password1){
      // let resp1=this.service.getCurrentUser();
      // resp1.subscribe((data)=>this.user=data);
      this.user.password=this.password3;
    let resp=this.service.updateAreaManagerPassword(this.user.email,this.user);
    alert("updated successfully");
    resp.subscribe((data)=>this.user=data);
    }
    else{
      alert("password mismatch");
    }
  }

  public checkPassword()
  {
    // let resp=this.service.getCurrentUser();
    // resp.subscribe((data)=>this.user=data);
    this.password=this.password2;
    if(this.password==this.user.password){
    this.status=true;
    alert("you can change your password");
    this.password="";
    }
    else{
    alert("entered password is wrong please reenter again");
    this.password="";
    }
  }
}
