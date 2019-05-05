import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login/login.service';
import { SharedService } from '../../service/shared.service';
declare var $: any;

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {
devices=[];
  constructor(private SharedService: SharedService, public api: LoginService) { }

  ngOnInit() {
    this.getdevices()
    
  }
  hi(){
   console.log('zfmhgszc')
  }

  getdevices() {
    let something:any;
    this.api.getdevide().subscribe(result => {
      console.log('device list', result);
      something=result;
      this.devices=something.result;
      console.log(this.devices)
    },
      err => {
        console.log(err);
        alert('something went wrong');
      })
  }

}
