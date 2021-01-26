import { Component, OnInit } from '@angular/core';
import { Homev2Component } from '../../home/homev2.component';

@Component({
  selector: 'app-calc-ce',
  templateUrl: './calc-ce.component.html',
  styleUrls: ['./calc-ce.component.scss']
})
export class CalcCeComponent implements OnInit {

  constructor(private containerComponent: Homev2Component) { }
  public carosuelItems = [
    {
      src: './assets/img/Audifonos--Huawei-Freebuds-3i.jpg',
      points: '15.000 mil puntos',
      title: 'Audifonos Huawei Freebuds 3i',
    },
    {
      src: './assets/img/Audifonos--SONY-WF-SP700N-V3.jpg',
      points: '20.000 mil puntos',
      title: 'Audifonos SONY WF SP700N',
    },
    {
      src: './assets/img/Celulares-Samsung-Galaxy-a11-de-64-GB-v3.jpg',
      points: '25.000 mil puntos',
      title: 'Celular Samsung Galaxy A11 de 64gb'
    },
    {
      src: './assets/img/Celulares-Huawei-Psmart-2020-128-GB-v2.jpg',
      points: '30.000 mil puntos',
      title: 'Celulares Huawei Psmart 2020 128 GB'
    },
    {
      src: './assets/img/Reloj-Samsung-Galaxy-Watch-42-mm-v3.jpg',
      points: '35.000 mil puntos',
      title: 'Reloj Samsung Galaxy'
    },
    {
      src: './assets/img/apple-watch.jpg',
      points: '42.000 mil puntos',
      title: 'Apple Watch SE de 40 mm'
    },
    {
      src: './assets/img/Ipad-10-2-Octava-generación-de-32-GB-Black.jpg',
      points: '60.000 mil puntos',
      title: 'Ipad 10,2" Octava generación de 32 GB'
    },
    {
      src: './assets/img/scooter.png',
      points: '70.000 mil puntos',
      title: 'Patineta Eléctrica Scooter'
    },
    {
      src: './assets/img/iphone11.png',
      points: '120.000 mil puntos',
      title: 'Iphone 11 de 64 GB'
    },
  ]
  ngOnInit() {
    console.log('Envio de lista: ' + this.carosuelItems + 'Tipo de dato' + typeof(this.carosuelItems));
  }
  public closeCalc() {
    (document.getElementById('containerHome') as HTMLDivElement).style.display = 'flex';
    this.containerComponent.isProgressCalcCe = false;
  }
}
