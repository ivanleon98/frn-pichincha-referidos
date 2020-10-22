import { Component, OnInit } from '@angular/core';
import { Color } from 'ng2-charts';

@Component({
  selector: 'app-card-accepted-cancelled',
  templateUrl: './card-accepted-cancelled.component.html',
  styleUrls: ['./card-accepted-cancelled.component.css']
})
export class CardAcceptedCancelledComponent implements OnInit {
  chartOptions = {
    responsive: true,
  };

  chartData = [
    {
      label: 'Ingresos',
      data: [33, 60, 26, 70, 12, 12,
        33, 60, 26, 70, 12, 12,],
    }
  ];

  chartLabels = ['Enero', 'Febrero',
    'Marzo', 'Abril',
    'Mayo', 'Junio',
    'Julio', 'Agosto',
    'Septiembre', 'Octubre',
    'Noviembre', 'Diciembre'];

  public lineChartColorsGreen: Color[] = [
    { // dark grey
      backgroundColor: 'rgba(115, 168, 57, 0)',
      borderColor: '#73a839',
      borderCapStyle: 'round',
      borderDash: [],
      borderWidth: 4,
      borderDashOffset: 0.0,
      borderJoinStyle: 'round',
      pointBorderColor: '#73a839',
      pointBackgroundColor: '#fff',
      pointHoverBorderWidth: 1,
      pointRadius: 0,
      pointBorderWidth: 5,
      pointHoverRadius: 3,
      pointHitRadius: 10,
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#73a839',
    },
  ];

  public lineChartColorsRed: Color[] = [
    { // dark grey
      backgroundColor: 'rgba(244, 67, 54, 0)',
      borderColor: '#f44336',
      borderCapStyle: 'round',
      borderDash: [],
      borderWidth: 4,
      borderDashOffset: 0.0,
      borderJoinStyle: 'round',
      pointBorderColor: '#f44336',
      pointBackgroundColor: '#fff',
      pointHoverBorderWidth: 1,
      pointRadius: 0,
      pointBorderWidth: 5,
      pointHoverRadius: 3,
      pointHitRadius: 10,
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#f44336',
    },
  ];

  public options = {
    layout: {
      padding: {
        left: 0,
        right: 8,
        top: 0,
        bottom: 0
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          display: false,
          beginAtZero: true
        },
        gridLines: {
          display: false
        }
      }],
      xAxes: [{
        ticks: {
          display: false
        },
        gridLines: {
          display: false
        }
      }]
    },
    legend: {
      display: false
    },
    responsive: true,
    maintainAspectRatio: false
  };


  onChartClick(event) {
  }
  constructor() { }

  ngOnInit() {
  }

}
