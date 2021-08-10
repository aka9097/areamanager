import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaManagerListGenieComponent } from './area-manager-list-genie/area-manager-list-genie.component';
import { AreaManagerLoginComponent } from './area-manager-login/area-manager-login.component';
import { AreaManagerUpdateGenieComponent } from './area-manager-update-genie/area-manager-update-genie.component';
import { AreaManagerUpdatePasswordComponent } from './area-manager-update-password/area-manager-update-password.component';
import { AreaManagerUserListComponent } from './area-manager-user-list/area-manager-user-list.component';

const routes: Routes = [
  {path:"areamanagerLogin",component:AreaManagerLoginComponent},
  {path:"listGenie",component:AreaManagerListGenieComponent},
  {path:"users",component:AreaManagerUserListComponent},
  {path:"update-genie/:id",component:AreaManagerUpdateGenieComponent},
  {path:"update",component:AreaManagerUpdatePasswordComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
