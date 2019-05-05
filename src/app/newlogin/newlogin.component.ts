import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newlogin',
  templateUrl: './newlogin.component.html',
  styleUrls: ['./newlogin.component.css']
})
export class NewloginComponent implements OnInit {
  email: string = '';
  password: string = '';
  constructor(public api: LoginService,private router: Router ) { }

  ngOnInit() {
  }
  gotoregister(){
    this.router.navigateByUrl('/register');

  }

  login(){
    let something:any;
    let _base = this;
    let data = {
      email: _base.email,
      password: _base.password,
    }
    console.log(data);
    this.api.login(data).subscribe(result => {
      console.log('login', result);
      something=result
      console.log('login', something.user._id);
      localStorage.setItem('userid', something.user._id);
      _base.router.navigateByUrl('/dashboard');
    },
      err => {
        console.log(err);
        alert('something went wrong');
      })
  }
  
}
