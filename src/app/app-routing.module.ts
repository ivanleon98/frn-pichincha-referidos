import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfitsComponent } from './components/profits/profits.component';
import { ActiveAccountComponent } from './components/active-account/active-account.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { FormReferComponent } from './components/form-refer/form-refer.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: LandingComponent,
  //   data: { title : 'Referidos Pichincha' }
  // },
  // {
  //   path: 'amigos-pichincha/home',
  //   component: HomeComponent,
  //   data: { title: 'Referidos Pichincha' }
  // },
  {
    path: 'amigos-pichincha/ganancias',
    component: ProfitsComponent,
    data: { title: 'Referidos Pichincha' }
  },
  {
    path: 'amigos-pichincha/active/account/:token',
    component: ActiveAccountComponent
  },
  {
    path: 'amigos-pichincha/reset/password/:token',
    component: ForgotPasswordComponent
  },
  {
    path: 'form/refer/:token',
    component: FormReferComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
