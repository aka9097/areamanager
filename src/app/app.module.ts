import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AreaManagerLoginComponent } from './area-manager-login/area-manager-login.component';
import { AreaManagerAddGenieComponent } from './area-manager-add-genie/area-manager-add-genie.component';
import { AreaManagerListGenieComponent } from './area-manager-list-genie/area-manager-list-genie.component';
import { AreaManagerUpdateGenieComponent } from './area-manager-update-genie/area-manager-update-genie.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AreaManagerUserListComponent } from './area-manager-user-list/area-manager-user-list.component';
import { AreaManagerUpdatePasswordComponent } from './area-manager-update-password/area-manager-update-password.component';

@NgModule({
  declarations: [
    AppComponent,
    AreaManagerLoginComponent,
    AreaManagerAddGenieComponent,
    AreaManagerListGenieComponent,
    AreaManagerUpdateGenieComponent,
    AreaManagerUserListComponent,
    AreaManagerUpdatePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
