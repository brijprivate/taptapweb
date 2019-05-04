import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
public show :boolean =true;
public hide :boolean =false;
  constructor() { }
  register(){
    console.log("hi");
    this.show=false;
    this.hide=true;
  }
  ngOnInit() {
  }

}
