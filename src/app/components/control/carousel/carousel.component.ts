import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component.js';
import { GeneralRequest } from 'src/app/model/general.request.js';
import { ApiGeneralService } from 'src/app/service/common/api-general.service.js';
import { LoggerService } from 'src/app/service/common/logger.service.js';
import { ReferidoService } from 'src/app/service/referido.service.js';
import { environment } from 'src/environments/environment.js';
import M from './../../../../assets/js/materialize.min.js';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() id: string;
  @Input() list: any; //Arreglo con el cual se va a pintar el carrusel.
  options = {
    fullWidth: false,
    indicators: true,
    duration: 150
  };
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
      src: './assets/img/Patinetas--electricas-Scooter-Nineboot-Segway-Es-2.png',
      points: '70.000 mil puntos',
      title: 'Patineta Eléctrica Scooter'
    },
    {
      src: './assets/img/Iphone-11-de-64-GB-V3.png',
      points: '120.000 mil puntos',
      title: 'Iphone 11 de 64 GB'
    },
  ]
  constructor(private containerComponent: AppComponent) {
  }

  ngOnInit() {

  }
  ngAfterViewInit() {
    // no errors
    let elems = document.querySelectorAll('.carousel');
    let instances = M.Carousel.init(elems, this.options);
    var instance = M.Carousel.getInstance(elems);
  }
  public onSubmit(event) {
    const element: HTMLElement = event.currentTarget as HTMLElement;
    if (element.id == "cdt") {
      this.containerComponent.isProgressFormRefer = true;
      this.containerComponent.isProgressImRefer = false;
    }
    if (element.id == "tdc") {
      this.containerComponent.isProgressFormTcd = true;
      this.containerComponent.isProgressImRefer = false;
    } {
    }
  }
}
