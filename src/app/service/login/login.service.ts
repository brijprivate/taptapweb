import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
let baseURL = 'http://ec2-18-225-10-142.us-east-2.compute.amazonaws.com:5450/'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public baseURL: string = "ec2-18-225-10-142.us-east-2.compute.amazonaws.com:5450/";
  headers: any;

  constructor(private http: HttpClient) {
    let headers = new HttpHeaders();
    this.headers = headers.set('Content-Type', 'application/json');
  }

  login(data) {
    return this.http.post(baseURL + 'user/login', data);
  }
  getdetailsbyuserid(id){
    return this.http.get(baseURL + 'user/userDashboard?userId='+id);

  }
  getprofilebyuserid(id){
    return this.http.get(baseURL + 'user/profile?id='+id);

  }
  verify(data) {
    return this.http.post(baseURL + 'user/registration', data);
  }
  register(data) {
    return this.http.post(baseURL + 'user/sendcode', data);
  }
  // login(data: any) {
  //   let _base = this;
  //   return new Promise(function (reject, resolve) {
  //     _base.http.post(_base.baseURL + 'user/login', data,{ headers: _base.headers })
  //       .subscribe(error => {
  //         console.log(error)
  //         reject(error);
  //       }, success => {
  //         console.log(success)
  //         resolve(success);
  //       });
  //   });
  // }
}
``