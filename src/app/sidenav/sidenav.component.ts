import { Component, OnInit } from '@angular/core';
import { SharedService } from '../service/shared.service';
import { LoginService } from '../service/login/login.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  public tapdata: boolean = true;
  userid: string;
  profiledata: Object;
  
  
  constructor(private SharedService: SharedService,public api: LoginService) { 
    this.userid=localStorage.getItem('userid');
    this.getdetailsbyuserid()
    this.getprofilebyuserid();
  }

  getprofilebyuserid(){
    this.api.getprofilebyuserid(this.userid).subscribe(result => {
    console.log('userprofile', result)
    this.profiledata=result;
    },
      err => {
        console.log(err);
        alert('something went wrong');
      })
  }

  getdetailsbyuserid(){
    this.api.getdetailsbyuserid(this.userid).subscribe(result => {
    console.log('userdata', result)
    },
      err => {
        console.log(err);
        alert('something went wrong');
      })
  }
 

  abc(a){
    this.SharedService.abc(a);
    this.SharedService.profile(this.profiledata)

  }
  ngOnInit() {
  }

}
