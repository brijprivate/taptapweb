import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  @ViewChild('doughnutCanvas') doughnutCanvas;

  doughnutChart: any;
  canvas: any;
  ctx: any;
  constructor() { }

  ngOnInit() {
    var _base = this;
    setTimeout(function () {
 

    }, 2000);
  }

  ngAfterViewInit() {
    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');
    let myChart = new Chart(this.ctx, {
      type: 'line',
        data: {
          labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          datasets: [{
            data: [0, 1, 4, 6, 6, 4, 1, 0],
            label: "Africa",
            borderColor: "#fff0",
            backgroundColor: "rgba(241, 169, 160, 0.5)",

            fill: true
          }, {
            data: [0, 0, 0, 0, 5, 9, 6, 3, 0],
            label: "india",
            borderColor: "#fff0",
            backgroundColor: "rgba(38, 194, 129, 0.5)",

            fill: true
          },]
        },
        options: {
          responsive: true,
          display:true,
          legend: {
            display: false,

          },
          elements: {
            point: {
              radius: 0
            }
          },
          scales: {
            xAxes: [{
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
              }
            }],
            yAxes: [{
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
              }
            }]
          },
          title: {
            display: false,
            text: 'TapTap data'
          }
        }
    });
  }

}
