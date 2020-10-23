import { Component, Input, OnInit } from '@angular/core';
import { PersonRefered } from 'src/app/model/refered.model';
import { ApiGeneralService } from 'src/app/service/common/api-general.service';
import { LoggerService } from 'src/app/service/common/logger.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-form-tcd',
  templateUrl: './form-tcd.component.html',
  styleUrls: ['./form-tcd.component.scss']
})
export class FormTcdComponent implements OnInit {
  @Input() path: string;
  @Input() token: string;
  rspAccept: any;
  route: Location;
  dateExpedition: any;
  constructor(private PersonRefered: PersonRefered, private log: LoggerService, private apiService: ApiGeneralService) { 
    this.route = location;
  }

  ngOnInit() {
    (document.getElementById('registrar-refered-tdc') as HTMLButtonElement).disabled = true;
  }
  
  public acceptReferTdcService() {
    this.PersonRefered.codeRefer = (document.getElementById('codePromTdc') as HTMLInputElement).value.toLocaleLowerCase().trim();
    this.PersonRefered.document = (document.getElementById('document-tdc') as HTMLInputElement).value.toLocaleLowerCase().trim();
    this.PersonRefered.name = (document.getElementById('name-refered-tdc') as HTMLInputElement).value.toLocaleLowerCase().trim();
    this.PersonRefered.termsConditions = 'acepto';
    this.PersonRefered.token = this.token;
    try {
      this.apiService.invokePostRequest<PersonRefered, boolean>(
        environment.endPointReferTdc,
        this.PersonRefered,
        (rsp: boolean) => {
          this.callBackAcceptRefer();
        }
      );
    } catch (err) {
      this.log.error(this, "Error consumiendo el servicio login: " + err);
    }
  }
  private callBackAcceptRefer(){
    this.rspAccept = this.apiService.response;
    if (this.rspAccept[0].status == true) {
      document.getElementById('myModal').style.display = 'block';
      // this.route.assign(environment.endPointRedirectTcd);
    } else{
      alert(this.rspAccept[0].response);
    }
  }
  public validateData() {
    let name = (document.getElementById('name-refered-tdc') as HTMLInputElement).value;
    let documentPerson = (document.getElementById('document-tdc') as HTMLInputElement).value;
    if (name!="" && documentPerson !="") {
      (document.getElementById('registrar-refered-tdc') as HTMLButtonElement).disabled = false;
    } else{
      (document.getElementById('registrar-refered-tdc') as HTMLButtonElement).disabled = true;
    }
  }
  public validateInputText(myId) {
    this.validateData();
    var obj = (<HTMLInputElement>document.getElementById(myId));
    var objValue = (<HTMLInputElement>document.getElementById(myId)).value;
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
        (document.getElementById('registrar-refered') as HTMLButtonElement).disabled = true;
      }
    });
  }
  public viewModal() {
    if ((document.getElementById('accept-terms-refered-tcd') as HTMLInputElement).checked == true) {
      document.getElementById('ModalTerms').style.display = 'block';
      document.body.style.overflow = 'hidden';
    } else if ((document.getElementById('accept-terms-refered-tcd') as HTMLInputElement).checked == false) {
      document.body.style.overflow = 'auto';
    }
  }
  public getValue(event){
    this.dateExpedition = event;
  }
  public closeModal() {
    document.getElementById('ModalTerms').style.display = 'none';
    let v = (document.getElementById('accept-terms-refered-tcd') as HTMLInputElement).checked = false;
    document.body.style.overflow = 'auto';
  }
  public closeModalWithCheck() {
    let request = new PersonRefered();
    document.getElementById('ModalTerms').style.display = 'none';
    document.body.style.overflow = 'auto';
    request.termsConditions = (document.getElementById('accept-terms-refered-tcd') as HTMLInputElement).checked == true ? 'aceptado' : 'rechazado';
  }
  
  public onlyNumbers(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/[^0-9]/g, '');

  }

  public onlyLetters(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚ ]/g, '');
  }
  public redirectTcd(){
    this.route.assign(environment.endPointRedirectTcd);
  }
}
