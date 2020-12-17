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
  public carosulItems = [
    {
      src: './assets/img/cdt-1.png',
      title: 'Cdt',
      id: 'cdt'
    },
    {
      src: './assets/img/tarjeta-1.png',
      title: 'Tarjeta de Crédito',
      id: 'tdc'
    },
    {
      src: './assets/img/educativo-1.png',
      title: 'Crédito Educativo',
      id: 'ce'
    },

  ]
  options = {
    fullWidth: false,
    indicators: false,
    duration: 150
  };
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
