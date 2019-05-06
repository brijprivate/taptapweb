import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login/login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public show: boolean = true;
  public hide: boolean = false;
  public loader :boolean = false;
  regdata = {
    name: '',
    email: '',
    password: '',
    role: 'user'
  };
  code:number;

  constructor(public api: LoginService, private router: Router,private toastr: ToastrService) { }
  register() {

    this.show = false;
    this.hide = true;
this.loader=true;
    console.log(this.regdata)
    this.api.register(this.regdata).subscribe(result => {
      this.toastr.success('Welcome!', 'Enter OTP'),
      console.log('register', result)
      this.loader=false;
    },
      err => {
        this.toastr.error('Error!', 'Server Error'),
        this.loader=false;
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
      this.toastr.success('Welcome!', 'Successfully Registered'),
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
