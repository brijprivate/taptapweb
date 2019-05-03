import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newlogin',
  templateUrl: './newlogin.component.html',
  styleUrls: ['./newlogin.component.css']
})
export class NewloginComponent implements OnInit {

  constructor() { 
    document.querySelector('.img__btn').addEventListener('click', function() {
      document.querySelector('.cont').classList.toggle('s--signup');
    });
  }

  ngOnInit() {
  }

}
