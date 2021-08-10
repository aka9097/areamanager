import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Address } from 'src/app/address/address';
import { Location } from 'src/app/location/location';
import { RestService } from 'src/app/rest.service';
import { User } from 'src/app/user/user';
import { Genie } from '../genie';

@Component({
  selector: 'app-readgenie',
  templateUrl: './readgenie.component.html',
  styleUrls: ['./readgenie.component.css']
})
export class ReadgenieComponent implements OnInit {
  user1!:User;
  address:Address=new Address(0,0,"","",this.user1);
  location:Location=new Location(0,"","","","",0,[]);
  user:User=new User(0,0,"","","",0,"USER",this.location,[],this.address);
  genie!:Genie[];
  u!:string
 

  constructor(private service:RestService,private route: ActivatedRoute) {
  //   this.route.queryParams.subscribe(data => {

  //     this.user = JSON.parse(data.user2) as User;
     
  //      console.log(this.user);
  //  })
  }

 

  ngOnInit(): void {

    
    
 


    this.route.queryParams.subscribe(
      params => {
        this.u =  params['user2'];
        console.log(this.u);
      }
    )

    let resp=this.service.getGeniesOfPerticularUser(this.u);
    resp.subscribe((data)=>this.genie=data);

    // let resp=this.service.getCurrentUser();
    // resp.subscribe((data)=>this.user=data);
  }

}
