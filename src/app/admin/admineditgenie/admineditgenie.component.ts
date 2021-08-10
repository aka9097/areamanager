import { Component, OnInit } from '@angular/core';
import { Genie } from 'src/app/Genie/genie';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-admineditgenie',
  templateUrl: './admineditgenie.component.html',
  styleUrls: ['./admineditgenie.component.css']
})
export class AdmineditgenieComponent implements OnInit {

  date!:Date;
  id=0;
  user:any;
 
  genie1 :Genie = new Genie(0,"","","",this.date,false,[]);
  message:any;
 
  

  constructor(private service:RestService) { }

  ngOnInit(): void {
  }

  public getGenie()
  {

    let resp=this.service.getGenieById(this.id);
    
    resp.subscribe((data)=>this.genie1=data);

    setTimeout(()=>{

      if(this.genie1.id == 0)
    {
    this.message="Invalid Genie ReferenceId";
    console.log(this.message)
    alert(this.message)
    }
      
    },500);
    
    
  }

  public updateGenie()
  {
    let resp=this.service.updateGenie(this.genie1,this.id);
    resp.subscribe((data)=>this.genie1=data);
    if(resp)
    {
      alert("Genie with Reference Id"+this.genie1.id+" Updated")
    }else{
            this.message="invalid id";
            console.log(this.message)
    }
  }

}
