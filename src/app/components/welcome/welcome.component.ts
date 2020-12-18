import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  public totalAccept: any;
  public totalNeg: any;
  constructor() { }

  ngOnInit() {
    this.getAcceptReferrals();
    this.getNegReferrals();
  }

  private getAcceptReferrals(){
    let acepreffer = sessionStorage.getItem('acceptedReferrals');
    let total = acepreffer.split(",").map(function (el) {  return + el; });
    this.totalAccept = String(total.reduce((a, b) => a + b));
  }

  private getNegReferrals(){
    let cancelreffer = sessionStorage.getItem('referralsPending');
    let total = cancelreffer.split(",").map(function (el) {  return + el; });
    this.totalNeg = String(total.reduce((a, b) => a + b));
  }
  
}
