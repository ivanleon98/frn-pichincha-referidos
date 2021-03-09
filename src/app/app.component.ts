import { Component, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ReferidoService } from './service/referido.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  viewId: number;
  token: string;
  url: any;
  path: string;
  public isProgressImRefer: boolean;
  public isProgressImOfficial: boolean;
  public isProgressLanding: boolean;
  public isProgressFormRefer: boolean;
  public isProgressHome: boolean;
  public isProgressFormTcd: boolean;
  public enableForRoute: boolean = false;
  public route: Location;
  title = 'referrals-pichincha';
  dataAppCardProfitLoss = [10, 5, 17, 23, 22, 31, 31, 35, 32, 25, 22, 21.5];
  dataAppCardProfitLossRed = [12, 12, 10, 8, 11, 15, 12, 13, 18, 17, 15, 10];
  dataAppGainChart = [31, 35, 32, 25, 22, 21.5];
  chartLabelsGainChart = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Septiembre'];

  constructor(private referedModel: ReferidoService){
    this.viewId = this.showComponents();
    this.isProgressLanding = true;
    this.isProgressImRefer = false;
    this.isProgressImOfficial = false;
    this.isProgressFormRefer = false;
    this.isProgressHome = false;
    this.isProgressFormTcd = false;
    this.route = location;
    this.enableForRoute = false;
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    (location.pathname.includes('/referidos-multinivel')===true?this.enableForRoute=true:this.enableForRoute=false)
  }

  private showComponents(){
    try {
      this.token = (document.getElementById('tokenVariable') as HTMLInputElement).value;
      
    } catch (error) {
    }

    try {
      this.url = (document.getElementById('pathVariable') as HTMLInputElement).value;
    } catch (error) {
    }
     if (this.url != null && this.url != undefined && this.url.indexOf("active-account")!=-1) {
      return 1;
    }
    else if (this.url != null && this.url != undefined && this.url.indexOf("reset-password")!=-1){
      return 2;
    }
  }
}
