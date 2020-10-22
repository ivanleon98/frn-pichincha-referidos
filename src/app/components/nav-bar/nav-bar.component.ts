import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnChanges {
  @Input() path: string;
  showView: number;
  storage: any
  constructor() {
    this.storage = window.sessionStorage;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.path == 'home') {
      this.showView = 1;
    }
    else if (this.path == 'ganancias') {
      this.showView = 2;
    } else if (this.path == 'referidos') {
      this.showView = 3
    } else if (this.path = 'amigos-pichincha') {
      this.showView = 4;
    }
  }

  public exit(){
    this.storage.clear();
    document.location.href = environment.endPointHome;
  }

  public openLogin() {
    let log = (document.getElementById('log-in') as HTMLButtonElement);
    if (log) {
      document.getElementById('myModal').style.display = 'flex';
      document.getElementById('form-log-in').style.display = 'flex';
      document.getElementById('form-sign-up').style.display = 'none';
      document.body.style.position = "fixed";
      document.body.style.overflow = "hidden";
    }
  }
  public openSign() {
    let sign = (document.getElementById('sign-in') as HTMLButtonElement);
    if (sign) {
      document.getElementById('myModal').style.display = 'flex';
      document.getElementById('form-sign-up').style.display = 'flex';
      // document.getElementById('modal-content').style.width = '45%';
      document.getElementById('form-log-in').style.display = 'none';
      document.body.style.position = "fixed";
      document.body.style.overflow = "hidden";
    }
  }
  public openRedimid() {
    // document.getElementById('myModal').style.display = 'flex';
    // document.getElementById('myModal').style.justifyContent = 'center';
    // document.getElementById('myModal').style.background = '#ffdd00db';
    // document.getElementById('modal-content').style.padding = '12px'; 
    // document.getElementById('modal-content').style.height = '90%'; 
    // document.getElementById('modal-content').style.marginTop = '32px'; 
    // document.getElementById('modal-content').style.borderRadius = '4px'; 
    // document.getElementById('modal-redimir').style.display = 'block';
    // document.getElementById('form-log-in').style.display = 'none';
    // document.getElementById('form-sign-up').style.display = 'none';
  }

  public openCalculator() {
    document.getElementById('calculatorCDT').style.display = 'block';
  }
}
