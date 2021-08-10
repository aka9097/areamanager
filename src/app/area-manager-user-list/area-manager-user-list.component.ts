import { Component, OnInit } from '@angular/core';
import { AreaManagerService } from '../area-manager.service';

@Component({
  selector: 'app-area-manager-user-list',
  templateUrl: './area-manager-user-list.component.html',
  styleUrls: ['./area-manager-user-list.component.css']
})
export class AreaManagerUserListComponent implements OnInit {
  user:any;
  users:any;
  constructor(private service:AreaManagerService) { }

  ngOnInit(): void {
    let resp=this.service.getCurrentUser();
    resp.subscribe((data)=>this.user=data);
    console.log(this.user);
    setTimeout(()=>{
      let resp2=this.service.getAllUser(this.user.email);
      resp2.subscribe((data)=>this.users=data);
    },1000);
  }

}
