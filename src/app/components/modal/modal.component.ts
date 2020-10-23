import { Component } from '@angular/core';
import { ReferidoService } from 'src/app/service/referido.service';
import { GeneralRequest } from 'src/app/model/general.request';
import { ApiGeneralService } from 'src/app/service/common/api-general.service';
import { environment } from 'src/environments/environment';
import { LoggerService } from 'src/app/service/common/logger.service';
import { ReferidoData } from 'src/app/model/referido.model';
import { PersonRefered } from 'src/app/model/refered.model';
import { ClientStorageService } from 'src/app/service/common/token.service';
import { InfoData } from 'src/app/model/data.model';
import { DataService } from 'src/app/service/data.service';
import { GainChartComponent } from '../gain-chart/gain-chart.component';
import { AppComponent } from 'src/app/app.component';

@Component({
    selector: 'modal-app',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
    rspAddPerson: any;
    rspSendEmailConfirmation;
    rspLogin: any;
    rspEmaimPassword: any;
    rspForCc: any;
    rspToken: any;
    rspTimeLine: any;
    storage: any;
    route: Location;
    rspGraphical: any;

    constructor(private referidoService: ReferidoService, private log: LoggerService, private apiService: ApiGeneralService, 
        private generalRequest: GeneralRequest, private PersonRefered: PersonRefered, private DataService: DataService,
        private GainChart: GainChartComponent, private containerComponent: AppComponent ) {
         this.storage = window.sessionStorage;
         this.route = location;
    }

    ngOnInit() {
        (document.getElementById('registrar') as HTMLButtonElement).disabled = true;
        (document.getElementById('confirm-password-email') as HTMLButtonElement).disabled = true;
        (document.getElementById('log-in-service') as HTMLButtonElement).disabled = true;
    }

     private stringToArray(data: string){
         let tmp = new Array<any>();
         let aux = data.split(",");
         for (let i=0; i<aux.length; i++) {
             tmp.push( aux[i] );
         }
         return tmp;
     }

    public getReferidoService(): ReferidoService {
        return this.referidoService;
    }

    resolved(captchaResponse: string) {
        this.validateSignUpFiels();
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

    public disabledButton(idbtn) {
        let smll = document.querySelectorAll('small');
        smll.forEach(small => {
            if (small.style.display == 'block') {
                (document.getElementById(idbtn) as HTMLButtonElement).disabled = true;
            }
        });
    }

    quitStyleInput(myId){
        // var obj = (<HTMLInputElement>document.getElementById(myId));
        // var objValue = (<HTMLInputElement>document.getElementById(myId)).value;
        // var valor = objValue;
        // var idObj = obj.getAttribute("id");
        // var padre = document.getElementById(idObj).parentNode;
        // var hijos = padre.childNodes;
        // var progressBar = hijos[3];
        // var labelName = hijos[2];
        // var mensaje = hijos[3];
        // if(obj.value == ""){
        //     (<HTMLElement>labelName).style.color = "#999";
        //     (<HTMLElement>labelName).style.top = "10px"; 
        //     obj.style.borderBottom = "1px solid #dedede";
        // }
    }

    validateSignUpFiels() {
        let nom = (document.getElementById('nombre-referido') as HTMLInputElement).value;
        let numidfull = (document.getElementById('identificacion-referido') as HTMLInputElement).value;
        let numCelfull = (document.getElementById('celular-referido') as HTMLInputElement).value;
        let pass = (document.getElementById('password-referido-new') as HTMLInputElement).value;
        let confirmPass = (document.getElementById('confirm-password-referido-new-confirmation') as HTMLInputElement).value;
        let btn = (document.getElementById('registrar') as HTMLButtonElement);
        let captcha = grecaptcha.getResponse().length;
        if (nom != "" && numidfull != "" && numCelfull != "" && pass != "" && confirmPass != "" && captcha !== 0) {
            btn.disabled = false;
        } else {
            btn.disabled = true;
        }
    }
    public validateLogInFields() {
        let mail = (document.getElementById('correo-referido-log-in') as HTMLInputElement).value;
        let pass = (document.getElementById('password-referido-log-in') as HTMLInputElement).value;
        if (mail != "" && pass != "") {
            (document.getElementById('log-in-service') as HTMLButtonElement).disabled = false;
        } else {
            (document.getElementById('log-in-service') as HTMLButtonElement).disabled = true;
        }
    }
    public validateEmailForPassword() {
        let mail = (document.getElementById('forgot-email') as HTMLInputElement).value;
        if (mail != "") {
            (document.getElementById('confirm-password-email') as HTMLButtonElement).disabled = false;
        } else {
            (document.getElementById('confirm-password-email') as HTMLButtonElement).disabled = true;
        }
    }
    public saveData() {
        this.referidoService.getReferido().name = (document.getElementById('nombre-referido') as HTMLInputElement).value;
        this.referidoService.getReferido().document = (document.getElementById('identificacion-referido') as HTMLInputElement).value;
        this.referidoService.getReferido().cellphone = (document.getElementById('celular-referido') as HTMLInputElement).value;
        this.referidoService.getReferido().password = (document.getElementById('password-referido-new') as HTMLInputElement).value;
    }


    public showForwardPassword() {
        document.getElementById('container-password').style.display = 'flex';
        document.getElementById('form-log-in').style.display = 'none';
    }

    public validatePassword() {
        if ((document.getElementById('confirm-password-referido-new-confirmation') as HTMLInputElement).value != "") {
            if ((document.getElementById('password-referido-new') as HTMLInputElement).value !== (document.getElementById('confirm-password-referido-new-confirmation') as HTMLInputElement).value) {
                document.getElementById('no-coincide').style.display = 'block';
                (document.getElementById('registrar') as HTMLButtonElement).disabled = true;
            } else if ((document.getElementById('password-referido-new') as HTMLInputElement).value == (document.getElementById('confirm-password-referido-new-confirmation') as HTMLInputElement).value) {
                document.getElementById('no-coincide').style.display = 'none';
                (document.getElementById('registrar') as HTMLButtonElement).disabled = false;
            }
        }

    }

    clearFields() {
        (document.getElementById('nombre-referido') as HTMLInputElement).value = '';
        (document.getElementById('identificacion-referido') as HTMLInputElement).value = '';
        (document.getElementById('identificacion-referido') as HTMLInputElement).value = '';
        (document.getElementById('celular-referido') as HTMLInputElement).value = '';
        (document.getElementById('password-referido-new') as HTMLInputElement).value = '';
        (document.getElementById('identificacion-referido') as HTMLInputElement).value = '';
    }

    closeModal() {
        let m = document.getElementById('myModal');
        document.body.style.overflow = "initial";
        document.body.style.position = "inherit";
        document.getElementById('sendemail').style.display = 'none';
        document.getElementById('container-password').style.display = 'none';
        m.style.display = 'none';
        // img.style.display = 'none';
    }

    viewSuccess() {
        let form = document.getElementById('form-sign-up');
        let img = document.getElementById('sendemail')
        let btn = (document.getElementById('registrar') as HTMLButtonElement);
        if (btn) {
            form.style.display = 'none';
            img.style.display = 'block';
        }

    }
    /* Service Add New Person */
    private callbackAddNewPerson(): JSON {
        this.rspAddPerson = this.apiService.response;
        if (this.rspAddPerson[0].status == true && this.rspAddPerson[0].response == "El usuario fue creado, debe ser activado") {
            this.sendEmailConfirmationService();
            this.viewSuccess();
        }
        if (this.rspAddPerson[0].status == false && this.rspAddPerson[0].response == "No estás habilitado para participar")
            alert('No estás habilitado para participar');
        if (this.rspAddPerson[0].status == false && this.rspAddPerson[0].response == "El correo ya está registrado")
            alert('El correo ya está registrado');
        if (this.rspAddPerson[0].status == false && this.rspAddPerson[0].response == "El documento ya está registrado")
            alert('El documento ya está registrado');
        return this.rspAddPerson;
    }

    public addPersonService() {
        this.generalRequest.name = (document.getElementById('nombre-referido') as HTMLInputElement).value;
        this.generalRequest.document = (document.getElementById('identificacion-referido') as HTMLInputElement).value;
        this.generalRequest.cellphone = (document.getElementById('celular-referido') as HTMLInputElement).value;
        this.generalRequest.password = (document.getElementById('password-referido-new') as HTMLInputElement).value;
        try {
            this.apiService.invokePostRequest<GeneralRequest, any>(
                environment.endpointAddPerson,
                this.generalRequest,
                (rsp: any) => {
                    this.callbackAddNewPerson();
                }
            );
        } catch (err) {
            this.log.error(this, "Error consumiendo el servicio agregar/registro persona: " + err);
        }
    }

    private callbackSendEmailConfirmation(): any {
        this.rspSendEmailConfirmation = this.apiService.response;
        if (this.rspSendEmailConfirmation) {
        }
        return this.rspSendEmailConfirmation;
    }

    public sendEmailConfirmationService() {
        this.generalRequest.document = (document.getElementById('identificacion-referido') as HTMLInputElement).value;
        try {
            this.apiService.invokePostRequest<GeneralRequest, boolean>(
                environment.endpointSendConfirmation,
                this.generalRequest,
                (rsp: boolean) => {
                    this.callbackSendEmailConfirmation();
                }
            );
        } catch (err) {
            this.log.error(this, "Error consumiendo el servicio envio de confirmación de email: " + err);
        }
    }

    private callbackLogin(): JSON {
        this.rspLogin = this.apiService.response;
        if (this.rspLogin[0].response == "Usuario y contraseña correctos") {
            this.rspToken = this.rspLogin[0].token;
            this.rspForCc = this.rspLogin[0].document;
            this.rspTimeLine = this.rspLogin[0].notificationsTimeline;
            this.storage.setItem('rspToken', this.rspToken);
            this.storage.setItem('mail', this.generalRequest.email);
            this.storage.setItem('cc', this.rspForCc);
            this.storage.setItem('code', this.rspLogin[0].codeRefer);
            this.graphicalDataService();
            this.getRefferalService();
            setTimeout(()=>{
                // this.route.assign(environment.endpointRedirectS3 + 'home');
                this.containerComponent.isProgressImOfficial = false;
                this.containerComponent.isProgressHome = true;
                this.closeModal();
                //this.route.assign('/home');
            }, 2000)
        }
        if (this.rspLogin[0].status == false && this.rspLogin[0].response == "Usuario y/o contraseña incorrectos")
            alert('Usuario y/o contraseña incorrectos');
        if (this.rspLogin[0].status == false && this.rspLogin[0].response == "El usuario debe activarse")
            alert('El usuario no ha sido activado.');
        if (this.rspLogin[0].status == false && this.rspLogin[0].response == "El usuario no existe")
            alert('No se ha encontrado una cuenta asociada al correo electrónico')
        return this.rspLogin;
    }

    public loginService() {
        this.generalRequest.email = (document.getElementById('correo-referido-log-in') as HTMLInputElement).value.toLocaleLowerCase();
        this.generalRequest.password = (document.getElementById('password-referido-log-in') as HTMLInputElement).value;
        try {
            this.apiService.invokePostRequest<GeneralRequest, boolean>(
                environment.endpointLogin + "",
                this.generalRequest,
                (rsp: boolean) => {
                    this.callbackLogin();
                }
            );
        } catch (err) {
            this.log.error(this, "Error consumiendo el servicio login: " + err);
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
        this.rspGraphical = this.apiService.response;
        this.storage.setItem('data', JSON.stringify(this.rspGraphical));
        return this.rspGraphical;
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


    private callbackSendEmailPassword(): any {
        this.rspEmaimPassword = this.apiService.response;
        if (this.rspEmaimPassword[0].status == true) {
            alert(this.rspEmaimPassword[0].response);
        }
        if(this.rspEmaimPassword[0].status == false){
            alert(this.rspEmaimPassword[0].response);
        }
        return this.rspEmaimPassword;
    }

    public sendEmailforgotPasswordService() {
        let request = new GeneralRequest();
        request.email = (document.getElementById('forgot-email') as HTMLInputElement).value.toLocaleLowerCase();
        try {
            this.apiService.invokePostRequest<GeneralRequest, boolean>(
                environment.endPointSendEmailPassword,
                request,
                (rsp: boolean) => {
                    this.callbackSendEmailPassword();
                }
            );
        } catch (err) {
            this.log.error(this, "Error consumiendo el servicio login: " + err);
        }
    }

}
