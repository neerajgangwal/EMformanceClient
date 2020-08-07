import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';

import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

import {EmployeeService} from './employee.service';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {ToastModule} from 'primeng/toast';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';

@NgModule({
  declarations: [EmployeeComponent, CreateEmployeeComponent, EmployeeListComponent, ViewEmployeeComponent, EditEmployeeComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,HttpClientModule,ReactiveFormsModule,ToastModule
  ],
  providers:[EmployeeService]
})
export class EmployeeModule { }
