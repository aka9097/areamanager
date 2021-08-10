import { Component, OnInit } from '@angular/core';
import { Genie } from 'src/app/Genie/genie';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-adminreadgenie',
  templateUrl: './adminreadgenie.component.html',
  styleUrls: ['./adminreadgenie.component.css']
})
export class AdminreadgenieComponent implements OnInit {

  genie!:Genie[];
  u!:string
 

  constructor(private service:RestService) {
  //   this.route.queryParams.subscribe(data => {

  //     this.user = JSON.parse(data.user2) as User;
     
  //      console.log(this.user);
  //  })
  }

 

  ngOnInit(): void {

  

    let resp=this.service.getAllGenies();
    resp.subscribe((data)=>this.genie=data);
  }
}
