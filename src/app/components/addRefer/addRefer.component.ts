import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MaskTypeInterface, MaskTypes } from 'src/app/interface/maskType.interfaces';
import { PersonRefered } from 'src/app/model/refered.model';
import { ApiGeneralService } from 'src/app/service/common/api-general.service';
import { LoggerService } from 'src/app/service/common/logger.service';
import { environment } from 'src/environments/environment';
import { Homev2Component } from '../home/homev2.component';

@Component({
  selector: 'app-addRefer',
  templateUrl: './addRefer.component.html',
  styleUrls: ['./addRefer.component.scss']
})
export class AddReferComponent implements OnInit {
  public formRefer: FormGroup;
  public isValid = true; // variable utilizada para saber si todo el formulario en valido
  public maskTypeNames: MaskTypeInterface = MaskTypes.find(m => m.type == "names"); // Indica el tipo de mascara a   utilizar en el input-text
  public maskTypeNumber: MaskTypeInterface = MaskTypes.find(m => m.type == "number"); // Indica el tipo de mascara a   utilizar en el 
  public listOffices = [
    'ARMENIA',
    'BARRANQUILLA - CALLE 72',
    'BARRANQUILLA - CENTRO',
    'BARRANQUILLA - PRADO',
    'BOGOTA - 7 DE AGOSTO',
    'BOGOTA - AVENIDA AMÉRICAS',
    'BOGOTA - AVENIDA CHILE',
    'BOGOTA - CALLE 80',
    'BOGOTA - CARRERA 10',
    'BOGOTA - CARVAJAL',
    'BOGOTA - CENTRO CALLE 22',
    'BOGOTA - CHAPINERO',
    'BOGOTA - CHICO',
    'BOGOTA - CONTADOR',
    'BOGOTA - FONTIBON',
    'BOGOTA - KENNEDY',
    'BOGOTA - LA ESMERALDA',
    'BOGOTA - RESTREPO',
    'BOGOTA - TOBERIN',
    'BOGOTA - UNICENTRO',
    'BOGOTA - VENECIA',
    'BUCARAMANGA - CABECERA',
    'BUCARAMANGA - CAÑAVERAL',
    'BUCARAMANGA - PASEO DEL COMERCIO',
    'CALI - ALAMEDA',
    'CALI - AVENIDA SEXTA NORTE',
    'CALI - CENTRO CARRERA 3',
    'CALI - HOLGUINES',
    'CARTAGENA - LA MATUNA',
    'CUCUTA - AVENIDA CERO',
    'IBAGUE - CENTRO CALLE 15',
    'IPIALES',
    'ITAGUI',
    'MANIZALES - MULTICENTRO',
    'MEDELLIN - ENVIGADO',
    'MEDELLIN - JUNIN',
    'MEDELLIN - LAURELES',
    'MEDELLIN - POBLADO',
    'MONTERIA - PARQUE SIMON BOLIVAR',
    'NEIVA - CENTRO CALLE 7',
    'PASTO - CENTRO CALLE 19',
    'PEREIRA - AV CIRCUNVALAR',
    'PEREIRA - PLAZA BOLIVAR',
    'SAN GIL',
    'TUNJA',
    'ZAPATOCA',
    'ASIGNAR POR GEOREFERENCIACIÓN'
  ]
  public flagService: number = 1; //Variable para saber que servicio se consumirá. (Por defecto se deja en CDT.)
  public selectCdt: boolean = false; // (Por defecto se deja en CDT.)
  public selectTcd: boolean = false;
  public selectCe: boolean = false;
  public enabledForm: boolean = false;
  public rspSendInvitation: any;
  public isDisabled = true;
  public rspGraphical: any;
  constructor(private log: LoggerService, private apiService: ApiGeneralService,
    private PersonRefered: PersonRefered, private containerComponent: Homev2Component) {
  }

  ngOnInit() {
    this.formRefer = new FormGroup({
      documentPerson: new FormControl("", [Validators.required]),
      documentPersonTcd: new FormControl("", Validators.required),
      documentPersonCe: new FormControl("", Validators.required),
      office: new FormControl("", Validators.required),
    })
    // (document.getElementById('buttonReffer') as HTMLButtonElement).disabled = true;
  }

  get documentPerson() {
    return this.formRefer.get('documentPerson');
  }
  get documentPersonTcd() {
    return this.formRefer.get('documentPersonTcd')
  }
  get documentPersonCe() {
    return this.formRefer.get('documentPersonCe')
  }
  get office() {
    return this.formRefer.get('office');
  }
  get f() { return this.formRefer }


  public consumeService() {
    if (this.flagService == 1) {
      this.addReferCdtService();
    }
    if (this.flagService == 2) {
      this.addReferTdcService();
    }
    if (this.flagService == 3) {
      this.addReferCeService();
    }
  }
  public addReferCdtService() {
    this.PersonRefered.token = sessionStorage.getItem('rspToken');
    this.PersonRefered.document = this.documentPerson.value;
    this.PersonRefered.productRefer = this.selectCdt == true ? 'cdt' : '';
    this.PersonRefered.office = (document.getElementById('selectOffice') as HTMLInputElement).value;
    if (this.PersonRefered.productRefer == "cdt") {
      try {
        this.apiService.invokePostRequest<PersonRefered, any>(
          environment.endPointAddReferCdt,
          this.PersonRefered,
          (rsp: any) => {
            this.callbackSendInvitationRefer();
          }
        );
      } catch (err) {
        this.log.error(this, "Error consumiendo el servicio agregar/registro persona: " + err);
      }
    }

  }

  public addReferTdcService() {
    this.PersonRefered.token = sessionStorage.getItem('rspToken');
    this.PersonRefered.document = this.documentPersonTcd.value;
    this.PersonRefered.productRefer = this.selectTcd == true ? 'tcd' : '';
    if (this.PersonRefered.productRefer == "tcd") {
      try {
        this.apiService.invokePostRequest<PersonRefered, any>(
          environment.endPointAddReferTdc,
          this.PersonRefered,
          (rsp: any) => {
            this.callbackSendInvitationRefer();
          }
        );
      } catch (err) {
        this.log.error(this, "Error consumiendo el servicio agregar/registro persona: " + err);
      }
    }

  }

  public addReferCeService() {
    this.PersonRefered.token = sessionStorage.getItem('rspToken');
    this.PersonRefered.document = this.documentPersonCe.value;
    this.PersonRefered.productRefer = this.selectCe == true ? 'ce' : '';
    if (this.PersonRefered.productRefer == "ce") {
      try {
        this.apiService.invokePostRequest<PersonRefered, any>(
          environment.endPointAddReferCe,
          this.PersonRefered,
          (rsp: any) => {
            this.callbackSendInvitationRefer();
          }
        );
      } catch (err) {
        this.log.error(this, "Error consumiendo el servicio agregar/registro persona: " + err);
      }
    }

  }

  private callbackSendInvitationRefer(): any {
    this.rspSendInvitation = this.apiService.response;
    if (this.rspSendInvitation[0].status == true) {
      this.graphicalDataService();
      alert(this.rspSendInvitation[0].response);
      document.getElementById("s1").classList.add('active');
      document.getElementById("s2").classList.remove('active');
      this.containerComponent.isProgressAddRefer = false;
      this.containerComponent.isProgressWelcome = true;

    } else if (this.rspSendInvitation[0].status == false) {
      alert(this.rspSendInvitation[0].response);
    }
    return this.rspSendInvitation;
  }

  private graphicalDataService() {
    this.PersonRefered.token = sessionStorage.getItem('rspToken');
    try {
      this.apiService.invokePostRequest<PersonRefered, boolean>(
        environment.endPointGraphicalData,
        this.PersonRefered,
        (rsp: boolean) => {
          this.callbackGraphicalData();
        }
      );
    } catch (err) {
      this.log.error(this, "Error consumiendo el servicio login: " + err);
    }
  }

  private callbackGraphicalData(): Array<string> {
    this.rspGraphical = this.apiService.response;
    sessionStorage.setItem('notificationsTimeline', this.rspGraphical[0].notificationsTimeline);
    return this.rspGraphical;
  }
  public selectProduct(event) {
    this.clean()
    this.enabledForm = true;
    let element = event.currentTarget as HTMLElement;
    if (element.id == "im1") {
      element.setAttribute("src", "./assets/img/cdt-1-ball.png");
      this.selectCdt = true;
      this.selectTcd = false;
      this.selectCe = false;
      this.flagService = 1;
      setTimeout(() => {
        this.loadOffices();
      }, 100);
    }
    if (element.id == "im2") {
      element.setAttribute("src", "./assets/img/tc-1-ball.png");
      this.selectCdt = false;
      this.selectCe = false
      this.selectTcd = true;
      this.flagService = 2;
    }
    if (element.id == "im3") {
      element.setAttribute("src", "./assets/img/educativo-1-ball.png");
      this.selectCdt = false;
      this.selectTcd = false;
      this.selectCe = true;
      this.flagService = 3;
    }
    // if (element.id == "im4") {
    //   element.setAttribute("src", "./assets/img/libranzablue.png");
    //   document.getElementById('p4').style.color = '#10133F';
    // }
  }
  public validateForm() {
    let office = (document.getElementById('selectOffice') as HTMLSelectElement);
    let documentPersonCdt = (document.getElementById('documentPerson') as HTMLInputElement);
    let documentPersonTcd = (document.getElementById('documentPersonTcd') as HTMLInputElement);
    if (this.flagService == 1) {
      if (documentPersonCdt.value != "" && office.value != "") {
        (document.getElementById('buttonReffer') as HTMLButtonElement).disabled = false;
      } else {
        (document.getElementById('buttonReffer') as HTMLButtonElement).disabled = true;
      }
    }
    if (this.flagService == 2) {
      if (documentPersonTcd.value != "") {
        (document.getElementById('buttonReffer') as HTMLButtonElement).disabled = false;
      } else {
        (document.getElementById('buttonReffer') as HTMLButtonElement).disabled = true;
      }
    }
  }

  private clean() {
    document.getElementById('im1').setAttribute("src", "./assets/img/cdt-ball.png");
    document.getElementById('im2').setAttribute("src", "./assets/img/tc-ball.png");
    document.getElementById('im3').setAttribute("src", "./assets/img/educativo-ball.png");
    document.getElementById('p1').style.color = '#72787A';
    document.getElementById('p2').style.color = '#72787A';
    document.getElementById('p3').style.color = '#72787A';
  }

  private loadOffices() {
    let slcCities = (document.getElementById('selectOffice') as HTMLSelectElement);
    for (let i = 0; i < this.listOffices.length; i++) {
      let dv = document.createElement("option");
      dv.innerHTML = this.listOffices[i];
      dv.value = this.listOffices[i];
      dv.id = this.listOffices[i];
      slcCities.appendChild(dv);
    }
  }


}
