import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActiveAccountComponent } from './components/active-account/active-account.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';

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
    path: 'amigos-pichincha/active/account/:token',
    component: ActiveAccountComponent
  },
  {
    path: 'amigos-pichincha/reset/password/:token',
    component: ForgotPasswordComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
