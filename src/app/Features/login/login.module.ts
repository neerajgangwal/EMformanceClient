import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginService} from './login.service';
import {HttpClientModule} from '@angular/common/http';
import {ToastModule} from 'primeng/toast';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,ReactiveFormsModule,HttpClientModule,ToastModule
  ],
  providers:[LoginService]
})
export class LoginModule { }
