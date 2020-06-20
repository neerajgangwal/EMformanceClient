import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginService} from './login.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,ReactiveFormsModule,HttpClientModule
  ],
  providers:[LoginService]
})
export class LoginModule { }
