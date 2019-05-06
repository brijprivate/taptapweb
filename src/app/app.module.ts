import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppuserComponent } from './dashboard/appuser/appuser.component';
import { ChartsComponent } from './dashboard/charts/charts.component';
import { NewloginComponent } from './newlogin/newlogin.component';
import { TaptaphistoryComponent } from './dashboard/taptaphistory/taptaphistory.component';
import { SearchComponent } from './dashboard/search/search.component';
import { DeviceComponent } from './dashboard/device/device.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TimeComponent } from './dashboard/time/time.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

  @NgModule({
    declarations: [
    AppComponent,
    SidenavComponent,
    DashboardComponent,
    AppuserComponent,
    ChartsComponent,
    NewloginComponent,
    TaptaphistoryComponent,
    SearchComponent,
    DeviceComponent,
    ProfileComponent,
    RegistrationComponent,
    TimeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      timeOut:2000,
      positionClass:'toast-top-right',
      preventDuplicates:true
    }) // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
