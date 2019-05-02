import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  dashboardContent:BehaviorSubject<any> = new BehaviorSubject({});;
  constructor() { }
  dashboardtoggle(params){
    this.dashboardContent.next(params)  
    console.log("hi");
  }
}

