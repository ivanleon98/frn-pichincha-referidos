import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-im-official',
  templateUrl: './imOfficial.component.html',
  styleUrls: ['./imOfficial.component.scss']
})
export class ImOfficialComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
}
