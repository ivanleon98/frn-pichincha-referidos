import { Component, OnInit, Input } from '@angular/core';
import { Color } from 'ng2-charts';
import { ColorService } from 'src/app/service/color.service';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-gain-chart',
  templateUrl: './gain-chart.component.html',
  styleUrls: ['./gain-chart.component.scss']
})
export class GainChartComponent {
  @Input() idCanvas: string | undefined;
  @Input() titleChart: string | undefined;
  @Input() lastMonths: string | undefined;
  @Input() titleProgressBar: string | undefined;
  @Input() points: string | undefined;
  @Input() chartLabelsData: string[] | undefined;
  @Input() label: string | undefined;
  @Input() data: number[];
  @Input() backgroundColor: string | undefined;
  @Input() borderColor: string | undefined;
  @Input() pointBorderColor1: string | undefined;
  @Input() pointBackgroundColor: string | undefined;
  @Input() pointHoverBackgroundColor: string | undefined;
  @Input() pointHoverBorderColor: string | undefined;
  public storage: any;
  public chartLabels: any;
  public widthBar: number = 10;    
  constructor(private paintableGainChart: ColorService, private infoData: DataService) {
    this.storage = window.sessionStorage;
  }
  

  chartOptions = {
    responsive: true,
  };

  public chartData = [
    {
      data: [1, 1, 1, 1, 1, 1],
      label: ''
    }
  ];




  public lineChartColors: Color[] = [
    { // dark grey
      backgroundColor: 'rgba(247, 185, 36, 0.7)',
      borderColor: '#f7b924',
      borderCapStyle: 'round',
      borderDash: [],
      borderWidth: 4,
      borderDashOffset: 0.0,
      borderJoinStyle: 'round',
      pointBorderColor: '#f7b924',
      pointBackgroundColor: '#fff',
      pointHoverBorderWidth: 3,
      pointRadius: 5,
      pointBorderWidth: 5,
      pointHoverRadius: 8,
      pointHitRadius: 10,
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#f7b924',
    },
  ];
  onChartClick(event) {
  }

  ngOnInit() {
    this.infoData.getObjInfoData().paintCharts();
    this.lineChartColors[0].backgroundColor = this.backgroundColor != undefined ? this.backgroundColor : this.paintableGainChart.getObjPaintable().gainChartBackgroundColor;
    this.lineChartColors[0].borderColor = this.borderColor != undefined ? this.backgroundColor : this.paintableGainChart.getObjPaintable().gainChartBorderColor;
    this.lineChartColors[0].pointBorderColor = this.pointBorderColor1 != undefined ? this.backgroundColor : this.paintableGainChart.getObjPaintable().gainChartPointBorderColor;
    this.lineChartColors[0].pointBackgroundColor = this.pointBackgroundColor != undefined ? this.pointBackgroundColor : this.paintableGainChart.getObjPaintable().gainChartPointBackgroundColor;
    this.lineChartColors[0].pointHoverBackgroundColor = this.pointHoverBackgroundColor != undefined ? this.pointHoverBackgroundColor : this.paintableGainChart.getObjPaintable().gainChartPointHoverBackgroundColor;
    this.lineChartColors[0].pointHoverBorderColor = this.pointHoverBorderColor != undefined ? this.pointHoverBorderColor : this.paintableGainChart.getObjPaintable().gainChartPointHoverBorderColor;
    
    this.chartLabels =  this.infoData.getObjInfoData().gainChartLabelsData;
    this.chartData[0].data = this.infoData.getObjInfoData().gainChartData;
    this.points = this.points != undefined ? this.points : this.infoData.getObjInfoData().gainChartPoints;
  }
  
  public calculateProgressBar(): string{
    this.widthBar =  this.storage.getItem('profitGoal');
    return this.widthBar + "%";
  }
}