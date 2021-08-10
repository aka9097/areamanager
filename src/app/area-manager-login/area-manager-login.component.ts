import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AreaManagerService } from '../area-manager.service';

@Component({
  selector: 'app-area-manager-login',
  templateUrl: './area-manager-login.component.html',
  styleUrls: ['./area-manager-login.component.css']
})
export class AreaManagerLoginComponent implements OnInit {
  username!: string;
  password !: string;
  message: any
  constructor(private service: AreaManagerService,private router:Router) { }

  ngOnInit(): void {
  }

  doLogin() {
    let resp = this.service.login(this.username, this.password);
    resp.subscribe(data => {
      this.message = data;
      console.log(this.message)
     this.router.navigate(["/listGenie"])
    });
}
}