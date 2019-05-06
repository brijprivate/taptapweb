import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login/login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-newlogin',
  templateUrl: './newlogin.component.html',
  styleUrls: ['./newlogin.component.css']
})
export class NewloginComponent implements OnInit {
  email: string = '';
  password: string = '';
  public loader :boolean = false;
  constructor(public api: LoginService,private router: Router,private toastr: ToastrService ) { }

  ngOnInit() {
  }
  gotoregister(){
    this.router.navigateByUrl('/register');

  }

  login(){
    let something:any;
    let _base = this;
    this.loader=true;
    let data = {
      email: _base.email,
      password: _base.password,
    }
    console.log(data);
    this.api.login(data).subscribe(result => {
      this.toastr.success('Welcome!', 'Successfully Logged In'),
      console.log('login', result);
      something=result
      console.log('login', something.user._id);
      localStorage.setItem('userid', something.user._id);
      _base.router.navigateByUrl('/dashboard');
      this.loader=false;
    },
      err => {
        this.toastr.error('Error!', 'Login failed'),
        this.loader=false;
        console.log(err);
        alert('something went wrong');
      })
  }
  
}
