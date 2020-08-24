import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-space-chart',
  templateUrl: './space-chart.component.html',
  styleUrls: ['./space-chart.component.css']
})
export class SpaceChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var myChart = new Chart("mychart", {
      type: 'pie',
      data: {
        labels: ['Used', 'Available'],
        datasets: [{
          label: 'Storage Status',
          data: [70, 30],
          backgroundColor: [
            '#F77016',
            '#650C89'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          ticks: {
            display: false
          }

        },
      }
    });
  }

}
