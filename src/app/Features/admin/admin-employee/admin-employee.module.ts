import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminEmployeeRoutingModule } from './admin-employee-routing.module';
import { AdminEmployeeComponent } from './admin-employee.component';


@NgModule({
  declarations: [AdminEmployeeComponent],
  imports: [
    CommonModule,
    AdminEmployeeRoutingModule
  ]
})
export class AdminEmployeeModule { }
