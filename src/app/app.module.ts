import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* import { AppRoutingModule } from './app-routing.module'; */
import { AppComponent } from './app.component';
import { GainChartComponent } from './components/gain-chart/gain-chart.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CardProfitLossComponent } from './components/card-profit-loss/card-profit-loss.component';
import { CardAcceptedCancelledComponent } from './components/card-accepted-cancelled/card-accepted-cancelled.component';
import { ColorService } from './service/color.service';
import { DataService } from './service/data.service';
import { ReferidoService } from './service/referido.service';
import { ModalComponent } from './components/modal/modal.component';
import { RecaptchaModule } from 'ng-recaptcha';
import { ApiGeneralService } from './service/common/api-general.service';
import { LoggerService } from './service/common/logger.service';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { ActiveAccountComponent } from './components/active-account/active-account.component';
import { GeneralRequest } from './model/general.request';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { FormReferComponent } from './components/form-refer-cdt/form-refer.component';
import { ModalTermsComponent } from './components/control/modal-terms/modal-terms.component';
import { PersonRefered } from './model/refered.model';
import { ClientStorageService } from './service/common/token.service';
import { CalendarComponent } from './components/control/calendar/calendar.component';
import { CalcCdtService } from './service/calc-cdt.service';
import { LandingTwoComponent } from './components/landing/landingTwo.component'
import { ImReferComponent } from './components/imRefer/imRefer.component';
import { ImOfficialComponent } from './components/imOfficial/imOfficial.component';
import { Homev2Component } from './components/home/homev2.component';
import { ControlMenuComponent } from './components/control/control-menu/control-menu.component';
import { AddReferComponent } from './components/addRefer/addRefer.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { InputTextComponent } from './components/control/input-text/input-text.component';
import { InputDatalistComponent } from './components/control/input-datalist/input-datalist.component';
import { MyReferralsComponent } from './components/myReferrals/myReferrals.component';
import { MyIncreaseComponent } from './components/myIncrease/myIncrease.component';
import { FormTcdComponent } from './components/form-tcd/form-tcd.component';
import { ReferralsTableComponent } from './components/referrals-table/referrals-table.component';
import { CarouselComponent } from './components/control/carousel/carousel.component';
import { RedeemComponent } from './components/redeem/redeem.component';
import { CalcCdtComponent } from './components/control/calc-cdt/calc-cdt.component';

@NgModule({
  declarations: [
    AppComponent,
    GainChartComponent,
    TimelineComponent,
    NavBarComponent,
    CardProfitLossComponent,
    CardAcceptedCancelledComponent,
    ReferralsTableComponent,
    ModalComponent,
    FooterComponent,
    ActiveAccountComponent,
    ForgotPasswordComponent,
    FormReferComponent,
    ModalTermsComponent,
    CalendarComponent,
    //V2
    LandingTwoComponent,
    ImReferComponent,
    ImOfficialComponent,
    Homev2Component,
    ControlMenuComponent,
    AddReferComponent,
    WelcomeComponent,
    InputTextComponent,
    InputDatalistComponent,
    MyReferralsComponent,
    MyIncreaseComponent,
    FormTcdComponent,
    CarouselComponent,
    RedeemComponent,
    CalcCdtComponent
  ],
  imports: [
    BrowserModule,
   /*  AppRoutingModule, */
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    RecaptchaModule.forRoot(),
    HttpClientModule

  ],
  providers: [
    LoggerService,
    ApiGeneralService,
    ColorService,
    DataService,
    ReferidoService,
    GeneralRequest,
    PersonRefered,
    ClientStorageService,
    GainChartComponent,
    CalcCdtService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
