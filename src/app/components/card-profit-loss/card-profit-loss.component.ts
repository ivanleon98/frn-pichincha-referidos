import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { Color } from 'ng2-charts';
import { ColorService } from 'src/app/service/color.service';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-card-profit-loss',
  templateUrl: './card-profit-loss.component.html',
  styleUrls: ['./card-profit-loss.component.css']
})
export class CardProfitLossComponent implements OnChanges {
  @Input() idCanvas: 'id-canvas-1' | 'id-canvas-2';
  @Input() typeCard: string | undefined;
  @Input() backgroundColor: string | undefined;
  @Input() borderColor: string | undefined;
  @Input() pointBorderColor: string | undefined;
  @Input() pointBackgroundColor: string | undefined;
  @Input() pointHoverBackgroundColor: string | undefined;
  @Input() pointHoverBorderColor: string | undefined;
  @Input() labelsData: string[] | undefined;
  @Input() label: string | undefined;
  @Input() data: number[];
  @Input() description: string;
  @Input() profit: any;
  @Input() profitType: string;
  @Input() styleHeader: 'true' | 'false';
  @Input() classProfit: 'div-canvas-1' | 'div-canvas-2';

  chartOptions = {
    responsive: true,
  };

  public chartData = [{
    label: 'Default',
    data: []
  }];


  public chartLabels = ['DefaultMonth', 'DefaultMonth',
    'DefaultMonth', 'DefaultMonth',
    'DefaultMonth', 'DefaultMonth',
    'DefaultMonth', 'DefaultMonth',
    'DefaultMonth', 'DefaultMonth',
    'DefaultMonth', 'DefaultMonth'];

  public lineChartColors: Color[] = [
    { // dark grey
      backgroundColor: '#c7c7c7',
      borderColor: '#c7c7c7',
      borderCapStyle: 'round',
      borderDash: [],
      borderWidth: 4,
      borderDashOffset: 0.0,
      borderJoinStyle: 'round',
      pointBorderColor: '#c7c7c7',
      pointBackgroundColor: '#c7c7c7',
      pointHoverBorderWidth: 1,
      pointRadius: 0,
      pointBorderWidth: 5,
      pointHoverRadius: 3,
      pointHitRadius: 10,
      pointHoverBackgroundColor: '#c7c7c7',
      pointHoverBorderColor: '#c7c7c7',
    }
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

  constructor(private paintableCardProfitLoss: ColorService, private infoData: DataService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.infoData.getObjInfoData().paintCharts();
    if (this.typeCard == "Expectativa de ingresos") {
      this.description = this.description != undefined ? this.description : this.paintableCardProfitLoss.getobjPaintableCardProfitLoss().cardProfitLossDescription;
      this.profitType = this.profitType != undefined ? this.profitType : this.paintableCardProfitLoss.getobjPaintableCardProfitLoss().cardProfitLossProfitType;
      this.lineChartColors[0].backgroundColor = this.backgroundColor != undefined ? this.backgroundColor : this.paintableCardProfitLoss.getobjPaintableCardProfitLoss().cardProfitLossBackgroundColor;
      this.lineChartColors[0].borderColor = this.borderColor != undefined ? this.borderColor : this.paintableCardProfitLoss.getobjPaintableCardProfitLoss().cardProfitLossBorderColor;
      this.lineChartColors[0].pointBorderColor = this.pointBorderColor != undefined ? this.pointBorderColor : this.paintableCardProfitLoss.getobjPaintableCardProfitLoss().cardProfitLossPointBorderColor;
      this.lineChartColors[0].pointBackgroundColor = this.pointBackgroundColor != undefined ? this.pointBackgroundColor : this.paintableCardProfitLoss.getobjPaintableCardProfitLoss().cardProfitLossPointBackgroundColor;
      this.lineChartColors[0].pointHoverBackgroundColor = this.pointHoverBackgroundColor != undefined ? this.pointHoverBackgroundColor : this.paintableCardProfitLoss.getobjPaintableCardProfitLoss().cardProfitLossPointHoverBackgroundColor;
      this.lineChartColors[0].pointHoverBorderColor = this.pointHoverBorderColor != undefined ? this.pointHoverBorderColor : this.paintableCardProfitLoss.getobjPaintableCardProfitLoss().cardProfitLossPointHoverBorderColor;
      this.chartLabels = this.infoData.getObjInfoData().cardProfitLossLabelsData;
      this.chartData[0].label = this.infoData.getObjInfoData().cardProfitLossLabel;
      this.chartData[0].data = this.infoData.getObjInfoData().cardProfitLossData;
      this.profit = this.infoData.getObjInfoData().cardProfitLossProfitValue;
    }

    if (this.typeCard == "Ingresos pendientes") {
      this.description = this.description != undefined ? this.description : this.paintableCardProfitLoss.getobjPaintableCardProfitLoss().cardProfitLossAdverseDescription;
      this.profitType = this.profitType != undefined ? this.profitType : this.paintableCardProfitLoss.getobjPaintableCardProfitLoss().cardProfitLossAdverseProfitType;
      this.lineChartColors[0].backgroundColor = this.backgroundColor != undefined ? this.backgroundColor : this.paintableCardProfitLoss.getobjPaintableCardProfitLoss().cardProfitLossAdverseBackgroundColor;
      this.lineChartColors[0].borderColor = this.borderColor != undefined ? this.borderColor : this.paintableCardProfitLoss.getobjPaintableCardProfitLoss().cardProfitLossAdverseBorderColor;
      this.lineChartColors[0].pointBorderColor = this.pointBorderColor != undefined ? this.pointBorderColor : this.paintableCardProfitLoss.getobjPaintableCardProfitLoss().cardProfitLossAdversePointBorderColor;
      this.lineChartColors[0].pointBackgroundColor = this.pointBackgroundColor != undefined ? this.pointBackgroundColor : this.paintableCardProfitLoss.getobjPaintableCardProfitLoss().cardProfitLossAdversePointBackgroundColor;
      this.lineChartColors[0].pointHoverBackgroundColor = this.pointHoverBackgroundColor != undefined ? this.pointHoverBackgroundColor : this.paintableCardProfitLoss.getobjPaintableCardProfitLoss().cardProfitLossAdversePointHoverBackgroundColor;
      this.lineChartColors[0].pointHoverBorderColor = this.pointHoverBorderColor != undefined ? this.pointHoverBorderColor : this.paintableCardProfitLoss.getobjPaintableCardProfitLoss().cardProfitLossAdversePointHoverBorderColor;
      this.chartLabels = this.infoData.getObjInfoData().cardProfitLossAdverseLabelsData;
      this.chartData[0].label = this.infoData.getObjInfoData().cardProfitLossAdverseLabel;
      this.chartData[0].data = this.infoData.getObjInfoData().cardProfitLossAdverseData;
      this.profit = this.profit = this.infoData.getObjInfoData().cardProfitLossAdverseProfitValue;
    }

    if (this.typeCard == "Referidos aceptados") {
      this.description = this.description != undefined ? this.description : this.paintableCardProfitLoss.getobjPaintableCardProfitLoss().cardProfitLossReferrelsAcceptedDescription;
      //this.profitType = this.profitType != undefined ? this.profitType : this.paintableCardProfitLoss.getobjPaintableCardProfitLoss().cardProfitLossReferrelsAcceptedProfitType;
      this.lineChartColors[0].backgroundColor = this.backgroundColor != undefined ? this.backgroundColor : this.paintableCardProfitLoss.getobjPaintableCardProfitLoss().cardProfitLossReferrelsAcceptedBackgroundColor;
      this.lineChartColors[0].borderColor = this.borderColor != undefined ? this.borderColor : this.paintableCardProfitLoss.getobjPaintableCardProfitLoss().cardProfitLossReferrelsAcceptedBorderColor;
      this.lineChartColors[0].pointBorderColor = this.pointBorderColor != undefined ? this.pointBorderColor : this.paintableCardProfitLoss.getobjPaintableCardProfitLoss().cardProfitLossReferrelsAcceptedPointBorderColor;
      this.lineChartColors[0].pointBackgroundColor = this.pointBackgroundColor != undefined ? this.pointBackgroundColor : this.paintableCardProfitLoss.getobjPaintableCardProfitLoss().cardProfitLossReferrelsAcceptedPointBackgroundColor;
      this.lineChartColors[0].pointHoverBackgroundColor = this.pointHoverBackgroundColor != undefined ? this.pointHoverBackgroundColor : this.paintableCardProfitLoss.getobjPaintableCardProfitLoss().cardProfitLossReferrelsAcceptedPointHoverBackgroundColor;
      this.lineChartColors[0].pointHoverBorderColor = this.pointHoverBorderColor != undefined ? this.pointHoverBorderColor : this.paintableCardProfitLoss.getobjPaintableCardProfitLoss().cardProfitLossReferrelsAcceptedPointHoverBorderColor;
      this.chartLabels =  this.infoData.getObjInfoData().cardProfitLossReferrelsAcceptedLabelsData;
      this.chartData[0].label = this.infoData.getObjInfoData().cardProfitLossReferrelsAcceptedLabel;
      this.chartData[0].data = this.infoData.getObjInfoData().cardProfitLossReferrelsAcceptedData;
      console.log('AcceptedData: ' + this.infoData.getObjInfoData().cardProfitLossReferrelsAcceptedData);
      this.profit = this.profit = this.infoData.getObjInfoData().cardProfitLossReferrelsAcceptedProfitValue;
    }

    if (this.typeCard == "Referidos negados") {
      this.description = this.description != undefined ? this.description : this.paintableCardProfitLoss.getobjPaintableCardProfitLoss().cardProfitLossReferrelsCanceledDescription;
      //this.profitType = this.profitType != undefined ? this.profitType : this.paintableCardProfitLoss.getobjPaintableCardProfitLoss().cardProfitLossReferrelsCanceledProfitType;
      this.lineChartColors[0].backgroundColor = this.backgroundColor != undefined ? this.backgroundColor : this.paintableCardProfitLoss.getobjPaintableCardProfitLoss().cardProfitLossReferrelsCanceledBackgroundColor;
      this.lineChartColors[0].borderColor = this.borderColor != undefined ? this.borderColor : this.paintableCardProfitLoss.getobjPaintableCardProfitLoss().cardProfitLossReferrelsCanceledBorderColor;
      this.lineChartColors[0].pointBorderColor = this.pointBorderColor != undefined ? this.pointBorderColor : this.paintableCardProfitLoss.getobjPaintableCardProfitLoss().cardProfitLossReferrelsCanceledPointBorderColor;
      this.lineChartColors[0].pointBackgroundColor = this.pointBackgroundColor != undefined ? this.pointBackgroundColor : this.paintableCardProfitLoss.getobjPaintableCardProfitLoss().cardProfitLossReferrelsCanceledPointBackgroundColor;
      this.lineChartColors[0].pointHoverBackgroundColor = this.pointHoverBackgroundColor != undefined ? this.pointHoverBackgroundColor : this.paintableCardProfitLoss.getobjPaintableCardProfitLoss().cardProfitLossReferrelsCanceledPointHoverBackgroundColor;
      this.lineChartColors[0].pointHoverBorderColor = this.pointHoverBorderColor != undefined ? this.pointHoverBorderColor : this.paintableCardProfitLoss.getobjPaintableCardProfitLoss().cardProfitLossReferrelsCanceledPointHoverBorderColor;
      this.chartLabels = this.infoData.getObjInfoData().cardProfitLossReferrelsCanceledLabelsData;
      this.chartData[0].label = this.infoData.getObjInfoData().cardProfitLossReferrelsCanceledLabel;
      this.chartData[0].data = this.infoData.getObjInfoData().cardProfitLossReferrelsCanceledData;
      this.profit = this.profit = this.infoData.getObjInfoData().cardProfitLossReferrelsCanceledProfitValue;
    }
  }

  // ngOnInit() {
  //   if (this.typeCard == "Expectativa de ingresos") {
  //     this.description = this.description != undefined ? this.description : this.paintableCardProfitLoss.getobjPaintableCardProfitLoss().cardProfitLossDescription;
  //     this.profitType = this.profitType != undefined ? this.profitType : this.paintableCardProfitLoss.getobjPaintableCardProfitLoss().cardProfitLossProfitType;
  //     this.lineChartColors[0].backgroundColor = this.backgroundColor != undefined ? this.backgroundColor : this.paintableCardProfitLoss.getobjPaintableCardProfitLoss().cardProfitLossBackgroundColor;
  //     this.lineChartColors[0].borderColor = this.borderColor != undefined ? this.borderColor : this.paintableCardProfitLoss.getobjPaintableCardProfitLoss().cardProfitLossBorderColor;
  //     this.lineChartColors[0].pointBorderColor = this.pointBorderColor != undefined ? this.pointBorderColor : this.paintableCardProfitLoss.getobjPaintableCardProfitLoss().cardProfitLossPointBorderColor;
  //     this.lineChartColors[0].pointBackgroundColor = this.pointBackgroundColor != undefined ? this.pointBackgroundColor : this.paintableCardProfitLoss.getobjPaintableCardProfitLoss().cardProfitLossPointBackgroundColor;
  //     this.lineChartColors[0].pointHoverBackgroundColor = this.pointHoverBackgroundColor != undefined ? this.pointHoverBackgroundColor : this.paintableCardProfitLoss.getobjPaintableCardProfitLoss().cardProfitLossPointHoverBackgroundColor;
  //     this.lineChartColors[0].pointHoverBorderColor = this.pointHoverBorderColor != undefined ? this.pointHoverBorderColor : this.paintableCardProfitLoss.getobjPaintableCardProfitLoss().cardProfitLossPointHoverBorderColor;
  //     this.chartLabels = this.labelsData != undefined ? this.labelsData : this.infoData.getObjInfoData().cardProfitLossLabelsData;
  //     this.chartData[0].label = this.label != undefined ? this.label : this.infoData.getObjInfoData().cardProfitLossLabel;
  //     this.chartData[0].data = this.infoData.getObjInfoData().cardProfitLossData;
  //     this.profit = this.infoData.getObjInfoData().cardProfitLossProfitValue;
  //   }

  //   if (this.typeCard == "Ingresos pendientes") {
  //     this.description = this.description != undefined ? this.description : this.paintableCardProfitLoss.getobjPaintableCardProfitLoss().cardProfitLossAdverseDescription;
  //     this.profitType = this.profitType != undefined ? this.profitType : this.paintableCardProfitLoss.getobjPaintableCardProfitLoss().cardProfitLossAdverseProfitType;
  //     this.lineChartColors[0].backgroundColor = this.backgroundColor != undefined ? this.backgroundColor : this.paintableCardProfitLoss.getobjPaintableCardProfitLoss().cardProfitLossAdverseBackgroundColor;
  //     this.lineChartColors[0].borderColor = this.borderColor != undefined ? this.borderColor : this.paintableCardProfitLoss.getobjPaintableCardProfitLoss().cardProfitLossAdverseBorderColor;
  //     this.lineChartColors[0].pointBorderColor = this.pointBorderColor != undefined ? this.pointBorderColor : this.paintableCardProfitLoss.getobjPaintableCardProfitLoss().cardProfitLossAdversePointBorderColor;
  //     this.lineChartColors[0].pointBackgroundColor = this.pointBackgroundColor != undefined ? this.pointBackgroundColor : this.paintableCardProfitLoss.getobjPaintableCardProfitLoss().cardProfitLossAdversePointBackgroundColor;
  //     this.lineChartColors[0].pointHoverBackgroundColor = this.pointHoverBackgroundColor != undefined ? this.pointHoverBackgroundColor : this.paintableCardProfitLoss.getobjPaintableCardProfitLoss().cardProfitLossAdversePointHoverBackgroundColor;
  //     this.lineChartColors[0].pointHoverBorderColor = this.pointHoverBorderColor != undefined ? this.pointHoverBorderColor : this.paintableCardProfitLoss.getobjPaintableCardProfitLoss().cardProfitLossAdversePointHoverBorderColor;
  //     this.chartLabels = this.labelsData != undefined ? this.labelsData : this.infoData.getObjInfoData().cardProfitLossAdverseLabelsData;
  //     this.chartData[0].label = this.label != undefined ? this.label : this.infoData.getObjInfoData().cardProfitLossAdverseLabel;
  //     this.chartData[0].data = this.data != undefined ? this.data : this.infoData.getObjInfoData().cardProfitLossAdverseData;
  //     this.profit = this.profit != undefined ? this.profit : this.infoData.getObjInfoData().cardProfitLossAdverseProfitValue;
  //   }

  //   if (this.typeCard == "Referidos aceptados") {
  //     this.description = this.description != undefined ? this.description : this.paintableCardProfitLoss.getobjPaintableCardProfitLoss().cardProfitLossReferrelsAcceptedDescription;
  //     //this.profitType = this.profitType != undefined ? this.profitType : this.paintableCardProfitLoss.getobjPaintableCardProfitLoss().cardProfitLossReferrelsAcceptedProfitType;
  //     this.lineChartColors[0].backgroundColor = this.backgroundColor != undefined ? this.backgroundColor : this.paintableCardProfitLoss.getobjPaintableCardProfitLoss().cardProfitLossReferrelsAcceptedBackgroundColor;
  //     this.lineChartColors[0].borderColor = this.borderColor != undefined ? this.borderColor : this.paintableCardProfitLoss.getobjPaintableCardProfitLoss().cardProfitLossReferrelsAcceptedBorderColor;
  //     this.lineChartColors[0].pointBorderColor = this.pointBorderColor != undefined ? this.pointBorderColor : this.paintableCardProfitLoss.getobjPaintableCardProfitLoss().cardProfitLossReferrelsAcceptedPointBorderColor;
  //     this.lineChartColors[0].pointBackgroundColor = this.pointBackgroundColor != undefined ? this.pointBackgroundColor : this.paintableCardProfitLoss.getobjPaintableCardProfitLoss().cardProfitLossReferrelsAcceptedPointBackgroundColor;
  //     this.lineChartColors[0].pointHoverBackgroundColor = this.pointHoverBackgroundColor != undefined ? this.pointHoverBackgroundColor : this.paintableCardProfitLoss.getobjPaintableCardProfitLoss().cardProfitLossReferrelsAcceptedPointHoverBackgroundColor;
  //     this.lineChartColors[0].pointHoverBorderColor = this.pointHoverBorderColor != undefined ? this.pointHoverBorderColor : this.paintableCardProfitLoss.getobjPaintableCardProfitLoss().cardProfitLossReferrelsAcceptedPointHoverBorderColor;
  //     this.chartLabels = this.labelsData != undefined ? this.labelsData : this.infoData.getObjInfoData().cardProfitLossReferrelsAcceptedLabelsData;
  //     this.chartData[0].label  != undefined ? this.label : this.infoData.getObjInfoData().cardProfitLossReferrelsAcceptedLabel;
  //     this.chartData[0].data  != undefined ? this.data : this.infoData.getObjInfoData().cardProfitLossReferrelsAcceptedData;
  //     console.log('chartDataLabel Referidos aceptados: ' + this.chartData[0].label);
  //     console.log('chartDataData Referidos Aceptados:' + this.chartData[0].data);
  //     this.profit = this.profit != undefined ? this.profit : this.infoData.getObjInfoData().cardProfitLossReferrelsAcceptedProfitValue;
  //   }

  //   if (this.typeCard == "Referidos cancelados") {
  //     this.description = this.description != undefined ? this.description : this.paintableCardProfitLoss.getobjPaintableCardProfitLoss().cardProfitLossReferrelsCanceledDescription;
  //     //this.profitType = this.profitType != undefined ? this.profitType : this.paintableCardProfitLoss.getobjPaintableCardProfitLoss().cardProfitLossReferrelsCanceledProfitType;
  //     this.lineChartColors[0].backgroundColor = this.backgroundColor != undefined ? this.backgroundColor : this.paintableCardProfitLoss.getobjPaintableCardProfitLoss().cardProfitLossReferrelsCanceledBackgroundColor;
  //     this.lineChartColors[0].borderColor = this.borderColor != undefined ? this.borderColor : this.paintableCardProfitLoss.getobjPaintableCardProfitLoss().cardProfitLossReferrelsCanceledBorderColor;
  //     this.lineChartColors[0].pointBorderColor = this.pointBorderColor != undefined ? this.pointBorderColor : this.paintableCardProfitLoss.getobjPaintableCardProfitLoss().cardProfitLossReferrelsCanceledPointBorderColor;
  //     this.lineChartColors[0].pointBackgroundColor = this.pointBackgroundColor != undefined ? this.pointBackgroundColor : this.paintableCardProfitLoss.getobjPaintableCardProfitLoss().cardProfitLossReferrelsCanceledPointBackgroundColor;
  //     this.lineChartColors[0].pointHoverBackgroundColor = this.pointHoverBackgroundColor != undefined ? this.pointHoverBackgroundColor : this.paintableCardProfitLoss.getobjPaintableCardProfitLoss().cardProfitLossReferrelsCanceledPointHoverBackgroundColor;
  //     this.lineChartColors[0].pointHoverBorderColor = this.pointHoverBorderColor != undefined ? this.pointHoverBorderColor : this.paintableCardProfitLoss.getobjPaintableCardProfitLoss().cardProfitLossReferrelsCanceledPointHoverBorderColor;
  //     this.chartLabels = this.labelsData != undefined ? this.labelsData : this.infoData.getObjInfoData().cardProfitLossReferrelsCanceledLabelsData;
  //     this.chartData[0].label  != undefined ? this.label : this.infoData.getObjInfoData().cardProfitLossReferrelsCanceledLabel;
  //     this.chartData[0].data  != undefined ? this.data : this.infoData.getObjInfoData().cardProfitLossReferrelsCanceledData;
  //     console.log('chartDataLabel Referidos cancelados: ' + this.chartData[0].label);
  //     console.log('chartDataData Referidos cancelados:' + this.chartData[0].data);
  //     this.profit = this.profit != undefined ? this.profit : this.infoData.getObjInfoData().cardProfitLossReferrelsCanceledProfitValue;
  //   }
  // }
}
