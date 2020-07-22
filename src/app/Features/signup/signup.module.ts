import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import {ReactiveFormsModule} from '@angular/forms';
import { EmailVerificationComponent } from './email-verification/email-verification.component';
import {ProgressBarModule} from 'primeng/progressbar';

@NgModule({
  declarations: [SignupComponent, EmailVerificationComponent],
  imports: [
    CommonModule,
    SignupRoutingModule,ReactiveFormsModule,ProgressBarModule
  ]
})
export class SignupModule { }
