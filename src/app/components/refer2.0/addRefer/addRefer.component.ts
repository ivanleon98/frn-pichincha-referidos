import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MaskTypeInterface, MaskTypes } from 'src/app/interface/maskType.interfaces';
import { PersonRefered } from 'src/app/model/refered.model';
import { ApiGeneralService } from 'src/app/service/common/api-general.service';
import { LoggerService } from 'src/app/service/common/logger.service';
import { ReferidoService } from 'src/app/service/referido.service';
import { environment } from 'src/environments/environment';

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
    '',
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
  public selectCdt: boolean = true; // (Por defecto se deja en CDT.)
  public selectTcd: boolean = false;
  public rspSendInvitation: any;
  public isDisabled = true;
  constructor(private log: LoggerService, private apiService: ApiGeneralService, private PersonRefered: PersonRefered) {
  }

  ngOnInit() {
    this.loadOffices();
    this.formRefer = new FormGroup({
      documentPerson: new FormControl("", [Validators.required]),
      documentPersonTcd: new FormControl("", Validators.required),
      office: new FormControl("", Validators.required),

    }),
      (document.getElementById('buttonReffer') as HTMLButtonElement).disabled = true;
    document.getElementById('im1').setAttribute("src", "./assets/img/cdtblue.png");
    document.getElementById('p1').style.color = '#72787A';
  }
  get documentPerson() {
    return this.formRefer.get('documentPerson');
  }
  get documentPersonTcd() {
    return this.formRefer.get('documentPersonTcd')
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
  }
  public addReferCdtService() {
    this.PersonRefered.token = sessionStorage.getItem('rspToken');
    this.PersonRefered.document = this.documentPerson.value;
    this.PersonRefered.productRefer = this.selectCdt == true ? 'CDT' : '';
    this.PersonRefered.office = (document.getElementById('selectOffice') as HTMLInputElement).value;
    console.log('office: ' + this.PersonRefered.office);
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

  public addReferTdcService() {
    this.PersonRefered.token = sessionStorage.getItem('rspToken');
    this.PersonRefered.document = this.documentPersonTcd.value;
    this.PersonRefered.productRefer = this.selectTcd == true ? 'TCD' : '';
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

  private callbackSendInvitationRefer(): any {
    this.rspSendInvitation = this.apiService.response;
    if (this.rspSendInvitation[0].status == true) {
      // this.graphicalDataService();
      // this.getRefferalService();
      alert(this.rspSendInvitation[0].response);
      // (document.getElementById('add-document-referido') as HTMLInputElement).value = "";
      // (document.getElementById('tarjeta-credito') as HTMLInputElement).checked == false;
      // (document.getElementById('selectOffice') as HTMLInputElement).value = "";
      // (document.getElementById('newRefer') as HTMLInputElement).checked == false;

    } else if (this.rspSendInvitation[0].status == false) {
      alert(this.rspSendInvitation[0].response);
    }
    return this.rspSendInvitation;
  }

  public selectProduct(event) {
    this.clean()
    let element = event.currentTarget as HTMLElement;
    let formcdt = document.getElementById('formcdt');
    let formtcd = document.getElementById('formtcd');
    if (element.id == "im1") {
      element.setAttribute("src", "./assets/img/cdtblue.png");
      document.getElementById('p1').style.color = '#10133F';
      formcdt.style.display = 'flex';
      formtcd.style.display = 'none';
      this.selectCdt = true;
      this.selectTcd = false;
      this.flagService = 1;
    }
    if (element.id == "im2") {
      element.setAttribute("src", "./assets/img/tcdblue.png");
      document.getElementById('p2').style.color = '#10133F';
      formcdt.style.display = 'none';
      formtcd.style.display = 'flex';
      this.selectCdt = false;
      this.selectTcd = true;
      this.flagService = 2;
    }

    if (element.id == "im3") {
      element.setAttribute("src", "./assets/img/libranzablue.png");
      document.getElementById('p3').style.color = '#10133F';
    }
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
  private clean() {
    document.getElementById('im1').setAttribute("src", "./assets/img/cdt.png");
    document.getElementById('im2').setAttribute("src", "./assets/img/tarjeta-de-credito.png");
    document.getElementById('im3').setAttribute("src", "./assets/img/libranza.png");
    document.getElementById('p1').style.color = '#72787A';
    document.getElementById('p2').style.color = '#72787A';
    document.getElementById('p3').style.color = '#72787A';
  }

}
