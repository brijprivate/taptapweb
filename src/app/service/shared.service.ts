import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  dashboardContent:BehaviorSubject<any> = new BehaviorSubject({});
  abcd:BehaviorSubject<any> = new BehaviorSubject({});
  profiledata:BehaviorSubject<any> = new BehaviorSubject({});

  constructor() { }
  dashboardtoggle(params){
    this.dashboardContent.next(params)  
    console.log("hi");
  }
 

  abc(params){
    this.abcd.next(params)  
    console.log("hi there");
  }
  profile(params){
    this.profiledata.next(params)  
    console.log("hiddd");
  }

}

