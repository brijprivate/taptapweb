import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  dashboardContent:BehaviorSubject<any> = new BehaviorSubject({});
  taptimeContent:BehaviorSubject<any> = new BehaviorSubject({});
  tapchartContent:BehaviorSubject<any> = new BehaviorSubject({});
  tapprofileContent:BehaviorSubject<any> = new BehaviorSubject({});
  tapsearchContent:BehaviorSubject<any> = new BehaviorSubject({});
  tapdeviceContent:BehaviorSubject<any> = new BehaviorSubject({});
  constructor() { }
  dashboardtoggle(params){
    this.dashboardContent.next(params)  
    console.log("hi");
  }
  timetoggle(params){
    this.taptimeContent.next(params)  
    console.log("hi");
  }
  charttoggle(params){
    this.tapchartContent.next(params)  
    console.log("hi");
  }
  profiletoggle(params){
    this.tapprofileContent.next(params)  
    console.log("hi");
  }
  searchtoggle(params){
    this.tapsearchContent.next(params)  
    console.log("hi");
  }
  devicetoggle(params){
    this.tapdeviceContent.next(params)  
    console.log("hi");
  }
}

