import { Component, OnInit } from '@angular/core';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  public tapdata: boolean = true;
  public taptimedata: boolean = true;
  public tapchartdata: boolean = true;
  public tapprofiledata: boolean = true;
  public tapsearchdata: boolean = true;
  public tapdevicedata: boolean = true;
  constructor(private SharedService: SharedService) { }
  taphistory(){
    this.SharedService.dashboardtoggle(this.tapdata);
    console.log('Data sent');
  }
  taptime(){
    this.SharedService.timetoggle(this.taptimedata);
    console.log('Data sent');
  }
  tapChart(){
    this.SharedService.charttoggle(this.tapchartdata);
    console.log('Data sent');
  }
  tapprofile(){
    this.SharedService.profiletoggle(this.tapprofiledata);
    console.log('Data sent');
  }
  tapsearch(){
    this.SharedService.searchtoggle(this.tapsearchdata);
    console.log('Data sent');  
  }
  tapdevice(){
    this.SharedService.devicetoggle(this.tapdevicedata);
    console.log('Data sent');    
  }
  ngOnInit() {
  }

}
