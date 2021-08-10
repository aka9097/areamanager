import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AreaManagerService } from '../area-manager.service';
import { User } from '../user';

@Component({
  selector: 'app-area-manager-list-genie',
  templateUrl: './area-manager-list-genie.component.html',
  styleUrls: ['./area-manager-list-genie.component.css']
})
export class AreaManagerListGenieComponent implements OnInit {
   genies:any;
   user:User;
   user2:any;
  constructor(private service:AreaManagerService,private router: Router) { }

  ngOnInit(): void {
    let resp=this.service.getCurrentUser();
    resp.subscribe((data)=>this.user2=data);
    console.log(this.user2);
    setTimeout(()=>{
      let resp2=this.service.getGeniesOfPerticularLocation(this.user2.email);
      resp2.subscribe((data)=>this.genies=data);
    },1000);
   
  }
  

  updateGenie(id: number){
    console.log(id);
    this.router.navigate(['update-genie', id]);
  }

}
