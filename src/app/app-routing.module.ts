import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActiveAccountComponent } from './components/active-account/active-account.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';

const routes: Routes = 
[
  {path:'referidos-multinivel/activacion/:token', component:ActiveAccountComponent},
  {path:'referidos-multinivel/recuperar/cuenta/:token', component:ForgotPasswordComponent}
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
