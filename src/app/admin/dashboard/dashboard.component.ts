import { Component, OnInit } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  mockData: any[] = [];

  doughnutChartLabels: string[] = [
    'Completed',
    'Not Started',
    'In Progress',
    'At Risk'
  ];

  doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [350, 450, 100, 200],
        backgroundColor: [
          '#5CDD9F', // Color for "Completed"
          '#AEB2BA', // Color for "Not Started"
          '#F4AF29', // Color for "In Progress"
          '#F36184', // Color for "At Risk"
        ],
      }
    ]
  };

  doughnutChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right'
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            let label = tooltipItem.label || '';
            label += ': ' + tooltipItem.raw;
            return label;
          }
        }
      },
    }
  };

  constructor() { }

  ngOnInit() {
    this.generateMockData(5)
  }

  generateMockData(count: number) {

    function getRandomInt(min: number, max: number): number {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    this.mockData = []

    for (let i = 0; i < count; i++) {
      const totalGoals = getRandomInt(10, 50);
      const complete = getRandomInt(0, totalGoals);
      const inProgress = getRandomInt(0, totalGoals - complete);
      const notStarted = totalGoals - complete - inProgress;
      const rate = getRandomInt(0, 100);

      this.mockData.push({
        total_goals: totalGoals,
        complete: complete,
        inprogress: inProgress,
        not_started: notStarted,
        rate: rate
      });
    }
  }

}
