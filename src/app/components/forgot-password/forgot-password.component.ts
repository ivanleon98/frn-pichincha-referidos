import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { GeneralRequest } from 'src/app/model/general.request';
import { environment } from 'src/environments/environment';
import { ReferidoService } from 'src/app/service/referido.service';
import { LoggerService } from 'src/app/service/common/logger.service';
import { ApiGeneralService } from 'src/app/service/common/api-general.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnChanges {
  @Input() token: string;
  generatedToken: any;
  statusEmail: boolean = true;
  constructor(private referidoService: ReferidoService, private log: LoggerService, private apiService: ApiGeneralService, private generalRequest: GeneralRequest) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  redirectHome(){
    document.location.href = environment.endpointRedirectS3;
  }

  public validatePassword(myId) {
    if((document.getElementById('new-password') as HTMLInputElement).value !== (document.getElementById('confirm-new-password') as HTMLInputElement).value){
      document.querySelector('small').style.display = 'block';
      (document.getElementById('password-btn') as HTMLButtonElement).disabled = true;
    } else if((document.getElementById('new-password') as HTMLInputElement).value == (document.getElementById('confirm-new-password') as HTMLInputElement).value){
      document.querySelector('small').style.display = 'none';
      (document.getElementById('password-btn') as HTMLButtonElement).disabled = false;
    }
}

  public changePasswordService() {
    let request = new GeneralRequest();
    request.password = (document.getElementById('confirm-new-password') as HTMLInputElement).value;
    try {
      this.apiService.invokePostRequest<GeneralRequest, boolean>(
        environment.endPointResetPassword + this.token,
        request,
        (rsp: boolean) => {
          this.callbackChangePassword();
        }
      );
    } catch (err) {
      this.log.error(this, "Error consumiendo el servicio envio de confirmación de email: " + err);
    }
  }

  private callbackChangePassword() {
    this.generatedToken = this.apiService.response;
    if (this.generatedToken[0].status == true) {
       document.getElementById('cont-success-password').style.display = 'flex';
       document.getElementById('cont-password').style.display = 'none';
    } else {
      this.statusEmail = false;
    }
  }
}
