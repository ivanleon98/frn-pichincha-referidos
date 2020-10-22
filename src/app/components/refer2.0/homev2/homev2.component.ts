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
  constructor() { }

  ngOnInit() {
  }

}
