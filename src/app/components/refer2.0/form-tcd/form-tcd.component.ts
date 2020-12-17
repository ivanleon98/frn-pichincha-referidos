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
  public validateData(event) {
    let e = event.currentTarget as HTMLElement;
    let name = (document.getElementById('name-refered-tdc') as HTMLInputElement);
    let documentPerson = (document.getElementById('document-tdc') as HTMLInputElement);
  
    if(e.id == "name-refered-tdc" && name.classList.contains("texto") == true)  {
      alert('1');
      this.onlyLetters(event);
    }
    if (documentPerson.classList.contains("numero") == true) {
      alert('2');
      this.onlyNumbers(event);
    }
    if (name.value!="" && documentPerson.value !="") {
      (document.getElementById('registrar-refered-tdc') as HTMLButtonElement).disabled = false;
    } else{
      (document.getElementById('registrar-refered-tdc') as HTMLButtonElement).disabled = true;
    }
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
