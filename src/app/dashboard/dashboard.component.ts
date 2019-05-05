import { Component, OnInit } from '@angular/core';
import { SharedService } from '../service/shared.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public tapchart:boolean = true;
  public tapuser: boolean = false;
  public taptime:boolean = false;
  public tapprofile:boolean = false;
  public tapsearch:boolean = false;
  public tapdevice:boolean = false;
  
  constructor(private SharedService: SharedService) { 
    this.SharedService.dashboardContent.subscribe(tapdata => {
      console.log(tapdata);
      if (tapdata == true) {
        this.tapuser = true;
        this.taptime =false;
        this.tapchart=false;
        this.tapprofile=false;
        this.tapsearch=false;
        this.tapdevice=false;
        console.log("show component");
      }
    });
    this.SharedService.taptimeContent.subscribe(taptimedata => {
      console.log(taptimedata);
      if (taptimedata == true) {
        this.taptime=true;
        this.tapuser = false;
        this.tapchart=false;
        this.tapprofile=false;
        this.tapsearch=false;
        this.tapdevice=false;
        console.log("show component");
      }
    }),
    this.SharedService.tapchartContent.subscribe(tapchartdata => {
      console.log(tapchartdata);
      if (tapchartdata == true) {
        this.tapchart=true;
        this.taptime =false;
        this.tapuser = false;
        this.tapprofile=false;
        this.tapsearch=false;
        this.tapdevice=false;
        console.log("show component");
      }
    }),
    this.SharedService.tapprofileContent.subscribe(tapprofiledata => {
      console.log(tapprofiledata);
      if (tapprofiledata == true) {
        this.tapprofile=true;
        this.tapchart=false;
        this.taptime =false;
        this.tapuser = false;
        this.tapsearch=false;
        this.tapdevice=false;
        console.log("show component");
      }
    }),
    this.SharedService.tapsearchContent.subscribe(tapsearchdata => {
      console.log(tapsearchdata);
      if (tapsearchdata == true) {
        this.tapsearch=true;
        this.tapchart=false;
        this.taptime =false;
        this.tapuser = false;
        this.tapprofile=false;
        this.tapdevice=false;
        console.log("show component");
      }
    }),
    this.SharedService.tapdeviceContent.subscribe(tapdevicedata => {
      console.log(tapdevicedata);
      if (tapdevicedata == true) {
        this.tapdevice=true;
        this.tapchart=false;
        this.taptime =false;
        this.tapuser = false;
        this.tapprofile=false;
        this.tapsearch=false;
        console.log("show component");
      }
    })
  }

  ngOnInit() {
  }

}
