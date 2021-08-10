import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminaddgenieComponent } from './admin/adminaddgenie/adminaddgenie.component';
import { AdmindeletegenieComponent } from './admin/admindeletegenie/admindeletegenie.component';
import { AdmineditgenieComponent } from './admin/admineditgenie/admineditgenie.component';
import { AdminreadgenieComponent } from './admin/adminreadgenie/adminreadgenie.component';
import { AddgenieComponent } from './Genie/addgenie/addgenie.component';
import { DeletegenieComponent } from './Genie/deletegenie/deletegenie.component';
import { ReadgenieComponent } from './Genie/readgenie/readgenie.component';
import { UpdategenieComponent } from './Genie/updategenie/updategenie.component';

import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UpdatepasswordComponent } from './user/updatepassword/updatepassword.component';
import { UpdateuserComponent } from './user/updateuser/updateuser.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';

const routes: Routes = [

  {path:"",redirectTo:"index",pathMatch:"full"},
  {path:"index",component:IndexComponent},
  {path:"login",component:LoginComponent},
  {path:"userdashboard",component:UserdashboardComponent},
  {path:"addgenie",component:AddgenieComponent},
  {path:"updategenie",component:UpdategenieComponent},
  {path:"deletegenie",component:DeletegenieComponent},
  {path:"readgenie",component:ReadgenieComponent},
  {path:"register",component:RegistrationComponent},
  {path:"updatePassword",component:UpdatepasswordComponent},
  {path:"updateUser",component:UpdateuserComponent},
  {path:"admin",component:AdminComponent},
  {path:"adminaddgenie",component:AdminaddgenieComponent},
  {path:"admineditgenie",component:AdmineditgenieComponent},
  {path:"admindeletegenie",component:AdmindeletegenieComponent},
  {path:"adminreadgenie",component:AdminreadgenieComponent}


  

  

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
