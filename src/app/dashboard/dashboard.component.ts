import { Component, OnInit } from '@angular/core';
import { SharedService } from '../service/shared.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public tapuser: boolean = false;
  constructor(private SharedService: SharedService) { 
    this.SharedService.dashboardContent.subscribe(tapdata => {
      console.log(tapdata);
      if (tapdata == true) {
        this.tapuser = true;
        console.log("show component");
      }
    })
  }

  ngOnInit() {
  }

}
