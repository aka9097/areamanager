import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AreaManagerService } from '../area-manager.service';
import { Genie } from '../genie';

@Component({
  selector: 'app-area-manager-update-genie',
  templateUrl: './area-manager-update-genie.component.html',
  styleUrls: ['./area-manager-update-genie.component.css']
})
export class AreaManagerUpdateGenieComponent implements OnInit {

  id: number;
  genie:Genie=new Genie();
  message:any;
  constructor(private service:AreaManagerService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }

  public getGenie()
  {
    let resp=this.service.getGenieById(this.id);
    
    resp.subscribe((data)=>this.genie=data);
  }

  public updateGenie()
  {
    let resp=this.service.updateGenie(this.genie,this.id);
    resp.subscribe((data)=>this.genie=data);
    if(resp)
    {
      alert("Genie with Reference Id"+this.id+" Updated")
    }
  }


}
