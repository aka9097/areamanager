import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-admindeletegenie',
  templateUrl: './admindeletegenie.component.html',
  styleUrls: ['./admindeletegenie.component.css']
})
export class AdmindeletegenieComponent implements OnInit {

  id=0;
  message:any;

  constructor(private service:RestService) { }

  ngOnInit(): void {
  }

  public delete()
  {
    let resp=this.service.delete(this.id);
    resp.subscribe((data)=>this.message=data);
    alert("genie deleted with ReferenceId"+this.id)
  }

}
