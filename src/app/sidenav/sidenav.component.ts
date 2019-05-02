import { Component, OnInit } from '@angular/core';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  public tapdata: boolean = true;

  constructor(private SharedService: SharedService) { }
  taphistory(){
    this.SharedService.dashboardtoggle(this.tapdata);
    console.log('Data sent');
  }
  ngOnInit() {
  }

}
