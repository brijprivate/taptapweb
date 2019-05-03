import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';



@Component({
  selector: 'app-newlogin',
  templateUrl: './newlogin.component.html',
  styleUrls: ['./newlogin.component.css']
})
export class NewloginComponent implements OnInit {

  constructor() { 
 
    // document.querySelector('.img__btn').addEventListener('click', function() {
    //   document.querySelector('.cont').classList.toggle('s--signup');
    // });
  }

  ngOnInit() {
    var el = document.querySelector('.img__btn');
    console.log(el)
    if(el){
      el.addEventListener('click',function(){
        document.querySelector('.cont').classList.toggle('s--signup');
      });
      
    }
  }

}
