import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppuserComponent } from './dashboard/appuser/appuser.component';
import { ChartsComponent } from './dashboard/charts/charts.component';
import { NewloginComponent } from './newlogin/newlogin.component';
import { TaptaphistoryComponent } from './dashboard/taptaphistory/taptaphistory.component';
import { SearchComponent } from './dashboard/search/search.component';
import { DeviceComponent } from './dashboard/device/device.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidenavComponent,
    DashboardComponent,
    AppuserComponent,
    ChartsComponent,
    NewloginComponent,
    TaptaphistoryComponent,
    SearchComponent,
    DeviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
