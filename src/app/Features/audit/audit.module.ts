import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuditRoutingModule } from './audit-routing.module';
import { AuditComponent } from './audit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ToastModule} from 'primeng/toast';
import {AuditService} from './audit.service'


@NgModule({
  declarations: [AuditComponent],
  imports: [
    CommonModule,
    AuditRoutingModule,ToastModule,
    FormsModule,ReactiveFormsModule,

  ],
  providers:[
    AuditService
  ]
})
export class AuditModule { }
