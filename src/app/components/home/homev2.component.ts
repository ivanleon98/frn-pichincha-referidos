import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homev2',
  templateUrl: './homev2.component.html',
  styleUrls: ['./homev2.component.scss']
})
export class Homev2Component implements OnInit {
  public isProgressWelcome: boolean = true;
  public isProgressAddRefer: boolean = false;
  public isProgressMyReferrals: boolean = false;
  public isProgressMyIncrease: boolean = false;
  public isProgressReedem: boolean = false;
  public isProgressCalc: boolean = false;
  public isProgressTable: boolean = false;
  public isProgressCalcCe: boolean  = false;
  public code: any;
  constructor() { }

  ngOnInit() {
  }
  public getCode(){
    this.code = sessionStorage.getItem("code");
    return this.code;
  }
}
