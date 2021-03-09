import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { ReferidoService } from 'src/app/service/referido.service';
import { LoggerService } from 'src/app/service/common/logger.service';
import { ApiGeneralService } from 'src/app/service/common/api-general.service';
import { GeneralRequest } from 'src/app/model/general.request';
import { environment } from 'src/environments/environment';
import { AppComponent } from 'src/app/app.component';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-active-account',
  templateUrl: './active-account.component.html',
  styleUrls: ['./active-account.component.scss']
})
export class ActiveAccountComponent implements OnInit {
  public token: any;
  public generatedToken: any;
  public rspSendEmailConfirmation;
  public ruta: Location;

  constructor(private log:LoggerService,private apiService:ApiGeneralService,private route:ActivatedRoute) {
    this.ruta = location;
  }

  ngOnInit(): void {
   this.route.paramMap
     .pipe(map(params => params.get('token')), tap(token => (this.token = +token)))
     .subscribe(token => {
       this.token = token;
       return this.token;
      });
      this.sendTokenConfirmationService();
  }

  public redirectHome() {
    this.ruta.reload();
  }
  public sendTokenConfirmationService() {
    try {
      this.apiService.invokePostRequest<GeneralRequest, boolean>(
        environment.endPointActiveAccount + this.token,
        null,
        (rsp: boolean) => {
          this.callbackSendTokenConfirmation();
        }
      );
    } catch (err) {
      this.log.error(this, "Error consumiendo el servicio envio de confirmación de email: " + err);
    }
  }

  private callbackSendTokenConfirmation(): any {
    this.generatedToken = this.apiService.response;
    if (this.generatedToken.status == true) {
      document.getElementById('account-true').style.display = 'flex';
    } else {
      document.getElementById('account-false').style.display = 'flex';
    }
    return this.generatedToken;
  }


  public validateInputText(myId, event) {
    this.onlyNumbers(event);
    this.validateData();
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

  public onlyNumbers(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/[^0-9]/g, '');

  }
  private validateData() {
    let docUser = (document.getElementById('documentUser') as HTMLInputElement).value;
    if (docUser != "") {
      (document.getElementById('resend') as HTMLButtonElement).disabled = false;
    } else {
      (document.getElementById('resend') as HTMLButtonElement).disabled = true;
    }
  }
}
