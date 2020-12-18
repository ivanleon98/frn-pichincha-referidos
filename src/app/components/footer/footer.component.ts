import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() styleFooter: number; // Número 1 --> Footer fondo blanco. Número 2 --> Footer fondo azul.
  constructor() { }

  ngOnInit() {
  }

  public paintYear() {
    let copy = document.getElementById('copyright');
    copy.innerHTML = String(new Date().getFullYear());
  }
}
