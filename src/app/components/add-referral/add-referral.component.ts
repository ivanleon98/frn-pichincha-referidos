import { Component, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { ReferidoService } from 'src/app/service/referido.service';
import { LoggerService } from 'src/app/service/common/logger.service';
import { ApiGeneralService } from 'src/app/service/common/api-general.service';
import { environment } from 'src/environments/environment';
import { PersonRefered } from 'src/app/model/refered.model';
import { GeneralRequest } from 'src/app/model/general.request';

@Component({
  selector: 'app-add-referral',
  templateUrl: './add-referral.component.html',
  styleUrls: ['./add-referral.component.scss']
})

export class AddReferralComponent implements OnInit, OnChanges {
  public code: string;
  public rspSendInvitation;
  public storage: any;
  public rspGraphical: any;
  public rspRefferal: any;
  public showOffice: boolean = true;
  public flagService: number; //Variable para saber que servicio se consumirá.
  public listOffices = ['ASIGNAR POR GEOREFERENCIACIÓN',
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
    'ZAPATOCA'
  ]
  constructor(private referidoService: ReferidoService, private log: LoggerService, private apiService: ApiGeneralService, private PersonRefered: PersonRefered, private GeneralRequest: GeneralRequest) {
    this.storage = window.sessionStorage;
  }

  ngOnInit() {
    (document.getElementById('refer') as HTMLButtonElement).disabled = true;
    this.loadCities();
    this.getCode();
  }
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
  }

  public getCode() {
    this.code = this.storage.getItem('code');
  }

  public consumeService(){
    if (this.flagService == 1) {
      this.addReferCdtService();
    }
    if(this.flagService == 2){
      this.addReferTdcService();
    }
  }

  public addReferCdtService() {
    this.PersonRefered.token = this.storage.getItem('rspToken');
    this.PersonRefered.document = (document.getElementById('add-document-referido') as HTMLInputElement).value;
    this.PersonRefered.productRefer = (document.getElementById('cdt') as HTMLInputElement).checked == true ? 'CDT' : '';
    this.PersonRefered.office = (document.getElementById('selectOffice') as HTMLInputElement).value;
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

  private callbackSendInvitationRefer(): any {
    this.rspSendInvitation = this.apiService.response;
    if (this.rspSendInvitation[0].status == true) {
      this.graphicalDataService();
      this.getRefferalService();
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

  
  public addReferTdcService() {
    this.PersonRefered.token = this.storage.getItem('rspToken');
    this.PersonRefered.document = (document.getElementById('add-document-referido') as HTMLInputElement).value;
    this.PersonRefered.productRefer = (document.getElementById('tarjeta-de-credito') as HTMLInputElement).checked == true ? 'TCD' : '';
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


  private callbackGraphicalData(): Array<string> {
    this.rspGraphical = this.apiService.response;

    this.storage.setItem('month', this.stringToArray(this.rspGraphical[0].recentMonths));
    this.storage.setItem('increase', this.stringToArray(this.rspGraphical[0].lastEarnings));
    this.storage.setItem('totalEarning', this.stringToArray(this.rspGraphical[0].totalEarnings));
    this.storage.setItem('profitGoal', this.stringToArray(this.rspGraphical[0].profitGoal));
    this.storage.setItem('acceptedReferrals', this.stringToArray(this.rspGraphical[0].acceptedReferrals));
    this.storage.setItem('referralsPending', this.stringToArray(this.rspGraphical[0].referralsPending));
    this.storage.setItem('revenueExpectation', this.stringToArray(this.rspGraphical[0].revenueExpectation));
    this.storage.setItem('outstandingIncome', this.stringToArray(this.rspGraphical[0].outstandingIncome));
    this.storage.setItem('notificationsTimeline', this.rspGraphical[0].notificationsTimeline);

    return this.rspGraphical;
  }

  private graphicalDataService() {
    this.PersonRefered.token = this.storage.getItem('rspToken');
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


  private callbackGetReferral(): Array<string> {
    this.rspRefferal = this.apiService.response;
    this.storage.setItem('data', JSON.stringify(this.rspRefferal));
    return this.rspRefferal;
  }

  private getRefferalService() {
    this.PersonRefered.token = this.storage.getItem('rspToken');
    try {
      this.apiService.invokePostRequest<PersonRefered, boolean>(
        environment.endPointGetReferrals,
        this.PersonRefered,
        (rsp: boolean) => {
          this.callbackGetReferral();
        }
      );
    } catch (err) {
      this.log.error(this, "Error consumiendo el servicio login: " + err);
    }
  }

  private stringToArray(data: string) {
    let tmp = new Array<any>();
    let aux = data.split(",");
    for (let i = 0; i < aux.length; i++) {
      tmp.push(aux[i]);
    }
    return tmp;
  }

  public selectProduct(id) {
    let cdt = (document.getElementById('p1') as HTMLImageElement);
    let tdc = (document.getElementById('p2') as HTMLImageElement);
    let office = (document.getElementById('groupOffice') as HTMLDivElement);
    if (id == "p1") {
      cdt.style.opacity = '1';
      tdc.style.opacity = '0.5';
      office.style.display = 'block';
      this.flagService = 1; // CDT
    } else if (id == "p2") {
      cdt.style.opacity = '0.5';
      tdc.style.opacity = '1';
      office.style.display = 'none';
      this.flagService = 2; //Tarjeta de crédito
    }
  }
  public closeModal() {
    document.getElementById('myModal').style.display = 'none';
  }

  public loadCities() {
    let slcCities = (document.getElementById('selectOffice') as HTMLSelectElement);
    for (let i = 0; i < this.listOffices.length; i++) {
      let dv = document.createElement("option");
      dv.innerHTML = this.listOffices[i];
      dv.value = this.listOffices[i];
      dv.id = this.listOffices[i];
      slcCities.appendChild(dv);
    }
  }
  public validateInputText(myId) {
    var obj = (<HTMLInputElement>document.getElementById(myId));
    var objValue = (<HTMLInputElement>document.getElementById(myId)).value;
    var valor = objValue;
    var idObj = obj.getAttribute("id");
    var padre = document.getElementById(idObj).parentNode;
    var hijos = padre.childNodes;
    var progressBar = hijos[3];
    var labelName = hijos[2];
    var mensaje = hijos[3];

    if (obj.getAttribute("class") == "texto") {
      if (/[0-9\-+.]/.test(objValue)) {
        obj.style.color = "red";
        obj.style.borderBottom = "1px solid #f44336";
        (<HTMLElement>progressBar).style.display = "none";
        (<HTMLElement>labelName).style.color = "#f44336";
        (<HTMLElement>mensaje).style.display = "block";
        (<HTMLElement>mensaje).style.color = "block";
        (<HTMLElement>labelName).style.top = "-14px";

      } else {
        obj.style.color = "#000";
        obj.style.borderBottom = "1px solid #4CAF50";
        (<HTMLElement>progressBar).style.display = "block";
        (<HTMLElement>labelName).style.color = "#4CAF50";
        (<HTMLElement>labelName).style.top = "-14px";
        (<HTMLElement>mensaje).style.display = "none";
      }
    }
    if (obj.getAttribute("class") == "correo") {
      if (/[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}/.test(objValue)) {
        obj.style.color = "#000";
        obj.style.borderBottom = "1px solid #4CAF50";
        (<HTMLElement>progressBar).style.display = "block";
        (<HTMLElement>labelName).style.color = "#4CAF50";
        (<HTMLElement>mensaje).style.display = "none";
      } else {
        obj.style.color = "red";
        obj.style.borderBottom = "1px solid #f44336";
        (<HTMLElement>progressBar).style.display = "none";
        (<HTMLElement>labelName).style.color = "#f44336";
        (<HTMLElement>mensaje).style.display = "block";
        (<HTMLElement>mensaje).style.color = "block";
        (<HTMLElement>labelName).style.top = "-14px";
      }
    }
    if (obj.getAttribute("class") == "numero") {
      if (/[a-zA-Z]/.test(objValue)) {
        obj.style.color = "red";
        obj.style.borderBottom = "1px solid #f44336";
        (<HTMLElement>progressBar).style.display = "none";
        (<HTMLElement>labelName).style.color = "#f44336";
        (<HTMLElement>mensaje).style.display = "block";
        (<HTMLElement>mensaje).style.color = "block";
        (<HTMLElement>labelName).style.top = "-14px";
      } else {
        obj.style.color = "#000";
        obj.style.borderBottom = "1px solid #4CAF50";
        (<HTMLElement>progressBar).style.display = "block";
        (<HTMLElement>labelName).style.color = "#4CAF50";
        (<HTMLElement>labelName).style.top = "-14px";
        (<HTMLElement>mensaje).style.display = "none";
      }
    }
  }

  public disabledButton() {
    let smll = document.querySelectorAll('small');
    smll.forEach(small => {
      if (small.style.display == 'block') {
        (document.getElementById('refer') as HTMLButtonElement).disabled = true;
      }
    });
  }

  public verifyData() {
    let doc = (document.getElementById('add-document-referido') as HTMLInputElement).value;
    let ofi = (document.getElementById('selectOffice') as HTMLInputElement).value;
    let productTdc = (document.getElementById('tarjeta-de-credito') as HTMLInputElement).checked;
    let productCdt = (document.getElementById('cdt') as HTMLInputElement).checked;
    if (productCdt == true) {
      if (doc != "" && ofi != "" && productCdt == true) {
        (document.getElementById('refer') as HTMLButtonElement).disabled = false;
        this.disabledButton();
      }
      else {
        (document.getElementById('refer') as HTMLButtonElement).disabled = true;
      }
    }
    else if (productTdc == true) {
      if (doc != "" && productTdc == true) {
        (document.getElementById('refer') as HTMLButtonElement).disabled = false;
        this.disabledButton();
      }
      else {
        (document.getElementById('refer') as HTMLButtonElement).disabled = true;
      }
    }

  }

}
