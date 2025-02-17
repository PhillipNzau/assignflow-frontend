import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  chart: any = [];
  canvas: any = [];
  public config: any = {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      datasets: [
        {
          label: '# of Assignments',
          data: [12, 19, 3, 5, 2, 3, 9],
          borderWidth: 1,
          backgroundColor: '#c026d3',
        },
        {
          label: '# of Students',
          data: [2, 23, 13, 50, 12, 2, 9],
          borderWidth: 1,
          backgroundColor: '#4f46e5',
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };

  ngOnInit(): void {
    this.chart = new Chart('chart', this.config);
    this.canvas = new Chart('canvas', this.config);
  }
}
