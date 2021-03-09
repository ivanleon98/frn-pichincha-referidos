import { Component, OnInit } from '@angular/core';
import { GeneralRequest } from 'src/app/model/general.request';
import { environment } from 'src/environments/environment';
import { LoggerService } from 'src/app/service/common/logger.service';
import { ApiGeneralService } from 'src/app/service/common/api-general.service';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  public generatedToken: any;
  public statusEmail: boolean = true;
  public route: Location;
  public token: any;

  constructor( private log: LoggerService, 
    private apiService: ApiGeneralService,  private activeRoute: ActivatedRoute) {
    this.route = location
  }
  ngOnInit() {
    this.activeRoute.paramMap
      .pipe(map(params => params.get('token')), tap(token => (this.token = +token)))
      .subscribe(token => {this.token = token;return this.token;});
  }



  redirectHome() {
    this.route.reload();
  }

  public validatePassword() {
    if ((document.getElementById('new-password') as HTMLInputElement).value !== (document.getElementById('confirm-new-password') as HTMLInputElement).value) {
      document.querySelector('small').style.display = 'block';
      (document.getElementById('password-btn') as HTMLButtonElement).disabled = true;
    } else if ((document.getElementById('new-password') as HTMLInputElement).value == (document.getElementById('confirm-new-password') as HTMLInputElement).value) {
      document.querySelector('small').style.display = 'none';
      (document.getElementById('password-btn') as HTMLButtonElement).disabled = false;
    }
  }

  public changePasswordService() {
    let request = new GeneralRequest();
    request.password = (document.getElementById('confirm-new-password') as HTMLInputElement).value;
    console.log('endPoint: ' + environment.endPointChangePassword);
    try {
      this.apiService.invokePostRequest<GeneralRequest, any>(
        environment.endPointChangePassword + this.token,
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
    if (this.generatedToken.status == true) {
      document.getElementById('cont-success-password').style.display = 'flex';
      document.getElementById('cont-password').style.display = 'none';
    } else {
      this.statusEmail = false;
    }
  }
}
