import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup.component';
import { EmailVerificationComponent } from './email-verification/email-verification.component';

const routes: Routes = [{ path: '', component: SignupComponent,data :{ Title:'' ,ShowHeader:false,ShowNavBar:false} },
{ path: 'EmailVerification', component: EmailVerificationComponent,data :{ Title:'' ,ShowHeader:false,ShowNavBar:false} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupRoutingModule { }
