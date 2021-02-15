import { Component, OnInit } from '@angular/core';
import { Homev2Component } from '../../home/homev2.component';

@Component({
  selector: 'app-control-menu',
  templateUrl: './control-menu.component.html',
  styleUrls: ['./control-menu.component.scss']
})
export class ControlMenuComponent implements OnInit {

  constructor(private containerComponent: Homev2Component) { }

  ngOnInit() {
  }

  public onSubmit(id, event) {
    this.clean();
    let element = event.currentTarget as HTMLElement;
    if (element.id == "s1") {
      this.containerComponent.isProgressWelcome = true;
      this.containerComponent.isProgressAddRefer = false;
      this.containerComponent.isProgressMyReferrals = false;
      this.containerComponent.isProgressMyIncrease = false
      this.containerComponent.isProgressReedem = false;

    }
    if (element.id == "s2") {
      this.containerComponent.isProgressAddRefer = true;
      this.containerComponent.isProgressWelcome = false;
      this.containerComponent.isProgressMyReferrals = false;
      this.containerComponent.isProgressMyIncrease = false
      this.containerComponent.isProgressReedem = false;
    }
    if (element.id == "s3") {
      this.containerComponent.isProgressMyReferrals = true;
      this.containerComponent.isProgressWelcome = false;
      this.containerComponent.isProgressAddRefer = false;
      this.containerComponent.isProgressMyIncrease = false;
      this.containerComponent.isProgressReedem = false;
    }
    if (element.id == "s4") {
      this.containerComponent.isProgressMyIncrease = true;
      this.containerComponent.isProgressWelcome = false;
      this.containerComponent.isProgressMyReferrals = false;
      this.containerComponent.isProgressAddRefer = false;
      this.containerComponent.isProgressReedem = false;
    }
    if (element.id == "s5") {
      this.containerComponent.isProgressReedem = true;
      this.containerComponent.isProgressWelcome = false;
      this.containerComponent.isProgressMyReferrals = false;
      this.containerComponent.isProgressAddRefer = false;
      this.containerComponent.isProgressMyIncrease = false;
    }
    if (id !== '0') {
      document.getElementById(id).classList.remove('active');
    }
    document.getElementById(id).classList.add('active');
  }

  private clean() {
    document.getElementById('s1').classList.remove('active');
    document.getElementById('s2').classList.remove('active');
    document.getElementById('s3').classList.remove('active');
    document.getElementById('s4').classList.remove('active');
    document.getElementById('s5').classList.remove('active');
  }
}
