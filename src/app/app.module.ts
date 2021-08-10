import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { IndexComponent } from './index/index.component';
import { RestService } from './rest.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddgenieComponent } from './Genie/addgenie/addgenie.component';
import { UpdategenieComponent } from './Genie/updategenie/updategenie.component';
import { DeletegenieComponent } from './Genie/deletegenie/deletegenie.component';
import { ReadgenieComponent } from './Genie/readgenie/readgenie.component';
import { RegistrationComponent } from './registration/registration.component';
import { UpdatepasswordComponent } from './user/updatepassword/updatepassword.component';
import { UpdateuserComponent } from './user/updateuser/updateuser.component';
import { AdminComponent } from './admin/admin.component';
import { AdminaddgenieComponent } from './admin/adminaddgenie/adminaddgenie.component';
import { AdmineditgenieComponent } from './admin/admineditgenie/admineditgenie.component';
import { AdmindeletegenieComponent } from './admin/admindeletegenie/admindeletegenie.component';
import { AdminreadgenieComponent } from './admin/adminreadgenie/adminreadgenie.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserdashboardComponent,
    IndexComponent,
    AddgenieComponent,
    UpdategenieComponent,
    DeletegenieComponent,
    ReadgenieComponent,
    RegistrationComponent,
    UpdatepasswordComponent,
    UpdateuserComponent,
    AdminComponent,
    AdminaddgenieComponent,
    AdmineditgenieComponent,
    AdmindeletegenieComponent,
    AdminreadgenieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
