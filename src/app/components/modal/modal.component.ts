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
    msgSuccess: string = ""; //Variable para guardar mensaje de éxito que devuelve back cuando se envía correo de cambio de contraseña.
    constructor(private referidoService: ReferidoService, private log: LoggerService, private apiService: ApiGeneralService,
        private generalRequest: GeneralRequest, private PersonRefered: PersonRefered, private DataService: DataService,
        private GainChart: GainChartComponent, private containerComponent: AppComponent) {
        this.storage = window.sessionStorage;
        this.route = location;
    }

    ngOnInit() {
        (document.getElementById('registrar') as HTMLButtonElement).disabled = true;
        (document.getElementById('confirm-password-email') as HTMLButtonElement).disabled = true;
        (document.getElementById('log-in-service') as HTMLButtonElement).disabled = true;
    }


    /* Service Add New Person */
    private callbackAddNewPerson(): JSON {
        this.rspAddPerson = this.apiService.response;
        if (this.rspAddPerson.status == true) {
            document.getElementById('sendemail').style.display = 'flex';
            document.getElementById('form-sign-up').style.display = 'none';
        } else {
            this.rspAddPerson.response
            alert(this.rspAddPerson.response);
        }
        return this.rspAddPerson;
    }

    public addPersonService() {
        this.generalRequest.name = (document.getElementById('nombre-referido') as HTMLInputElement).value;
        this.generalRequest.document = (document.getElementById('identificacion-referido') as HTMLInputElement).value;
        this.generalRequest.cellphone = (document.getElementById('celular-referido') as HTMLInputElement).value;
        this.generalRequest.password = (document.getElementById('password-referido-new') as HTMLInputElement).value;
        this.generalRequest.email = (document.getElementById('email-register') as HTMLInputElement).value;
        
        try {
            this.apiService.invokePostRequest<GeneralRequest, any>(
                environment.endPointSignUp,
                this.generalRequest,
                (rsp: any) => {
                    this.callbackAddNewPerson();
                }
            );
        } catch (err) {
            this.log.error(this, "Error consumiendo el servicio agregar/registro persona: " + err);
        }
    }



    private callbackLogin() {
        this.rspLogin = this.apiService.response;

        if (this.rspLogin[0].status == true) {
            this.rspToken = this.rspLogin[0].token;
            this.rspForCc = this.rspLogin[0].document;
            this.rspTimeLine = this.rspLogin[0].notificationsTimeline;
            this.storage.setItem('rspToken', this.rspToken);
            this.storage.setItem('mail', this.generalRequest.email);
            this.storage.setItem('cc', this.rspForCc);
            this.storage.setItem('code', this.rspLogin[0].codeRefer);
            this.graphicalDataService();
            this.getRefferalService();
            setTimeout(() => {
                // this.route.assign(environment.endpointRedirectS3 + 'home');
                this.containerComponent.isProgressImOfficial = false;
                this.containerComponent.isProgressHome = true;
                this.closeModal();
                //this.route.assign('/home');
            }, 2000)
        } else {
            alert(this.rspLogin[0].response);
        }
    }

    public loginService() {
        this.generalRequest.email = (document.getElementById('correo-referido-log-in') as HTMLInputElement).value.toLocaleLowerCase();
        this.generalRequest.password = (document.getElementById('password-referido-log-in') as HTMLInputElement).value;
        this.containerComponent.isProgressImOfficial = false;
        this.containerComponent.isProgressHome = true;
        this.closeModal()

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

        sessionStorage.setItem('month', (this.rspGraphical[0].graphicDateIndicator));
        sessionStorage.setItem('lastEarningsCDT', (this.rspGraphical[0].lastEarningsCDT));
        sessionStorage.setItem('lastEarningsTCD', (this.rspGraphical[0].lastEarningsTCD));
        sessionStorage.setItem('lastEarningsCE', (this.rspGraphical[0].lastEarningsCE));
        sessionStorage.setItem('totalEarningsCOP', (this.rspGraphical[0].totalEarningsCOP));
        sessionStorage.setItem('totalEarningsPoints', (this.rspGraphical[0].totalEarningsPoints));
        sessionStorage.setItem('profitGoal', (this.rspGraphical[0].profitGoal));
        sessionStorage.setItem('acceptedReferrals', (this.rspGraphical[0].acceptedReferrals));
        sessionStorage.setItem('referralsPending', (this.rspGraphical[0].pendingReferrals));
        sessionStorage.setItem('deniedReferrals', (this.rspGraphical[0].deniedReferrals))
        sessionStorage.setItem('revenueExpectation', (this.rspGraphical[0].revenueExpectation));
        sessionStorage.setItem('outstandingIncome', (this.rspGraphical[0].outstandingIncome));
        sessionStorage.setItem('notificationsTimeline', this.rspGraphical[0].notificationsTimeline);

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
        if (this.rspEmaimPassword.status == true) {
            this.msgSuccess = this.rspEmaimPassword.response;
        }
        if (this.rspEmaimPassword.status == false) {
            alert(this.rspEmaimPassword.response);
        }
        return this.rspEmaimPassword;
    }

    public sendEmailforgotPasswordService() {
        let request = new GeneralRequest();
        request.email = (document.getElementById('forgot-email') as HTMLInputElement).value.toLocaleLowerCase();
        try {
            this.apiService.invokePostRequest<GeneralRequest, boolean>(
                environment.endPointEmailPassword,
                request,
                (rsp: boolean) => {
                    this.callbackSendEmailPassword();
                }
            );
        } catch (err) {
            this.log.error(this, "Error consumiendo el servicio login: " + err);
        }
    }

    public getReferidoService(): ReferidoService {
        return this.referidoService;
    }

    resolved(captchaResponse: string) {
        this.validateSignUpFiels();
    }

    public disabledButton(idbtn) {
        let smll = document.querySelectorAll('small');
        smll.forEach(small => {
            if (small.style.display == 'block') {
                (document.getElementById(idbtn) as HTMLButtonElement).disabled = true;
            }
        });
    }

    validateSignUpFiels() {
        let nom = (document.getElementById('nombre-referido') as HTMLInputElement).value;
        let numidfull = (document.getElementById('identificacion-referido') as HTMLInputElement).value;
        let numCelfull = (document.getElementById('celular-referido') as HTMLInputElement).value;
        let pass = (document.getElementById('password-referido-new') as HTMLInputElement).value;
        let confirmPass = (document.getElementById('confirm-password-referido-new-confirmation') as HTMLInputElement).value;
        let email = (document.getElementById('email-register') as HTMLInputElement);
        let btn = (document.getElementById('registrar') as HTMLButtonElement);
        let captcha = grecaptcha.getResponse().length;
        if (nom!=""&&numidfull!= ""&&numCelfull!=""&&email.value!=""&&email.validity.patternMismatch==false&&pass!=""&&confirmPass!=""&&captcha!==0&&(confirmPass===pass)) {
            btn.disabled = false;
        } else {
            btn.disabled = true;
        }
        if (email.validity.patternMismatch==true) {
            document.getElementById('smallemail').style.display = 'block';
        } else{
            document.getElementById('smallemail').style.display = 'none';
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
            img.style.display = 'flex';
        }

    }

    public onlyNumbers(event: KeyboardEvent) {
        const input = event.target as HTMLInputElement;
        input.value = input.value.replace(/[^0-9]/g, '');

    }

    public onlyLetters(event: KeyboardEvent) {
        const input = event.target as HTMLInputElement;
        input.value = input.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚ ]/g, '');
    }
}
