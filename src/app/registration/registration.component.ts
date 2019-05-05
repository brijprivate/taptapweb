import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public show: boolean = true;
  public hide: boolean = false;
  regdata = {
    name: '',
    email: '',
    password: '',
    role: 'user'
  };
  code:number;

  constructor(public api: LoginService, private router: Router) { }
  register() {

    this.show = false;
    this.hide = true;

    console.log(this.regdata)
    this.api.register(this.regdata).subscribe(result => {
      console.log('register', result)
    },
      err => {
        console.log(err)
      })
  }
  verify() {
    let data={
      email:this.regdata.email,
      code:this.code
    }
    console.log(data);
    this.api.verify(this.regdata).subscribe(result => {
      console.log('verify', result)
    },
      err => {
        console.log(err)
      })

      this.router.navigateByUrl('/dashboard');

  }
  
  
  ngOnInit() {
  }

}
