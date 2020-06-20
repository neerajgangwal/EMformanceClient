import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentRoutingModule } from './department-routing.module';
import { DepartmentComponent } from './department.component';
import { CreateDepartmentComponent } from './create-department/create-department.component';

import {ReactiveFormsModule} from '@angular/forms'
import {DepartmentService} from './department.service';
import {HttpClientModule} from '@angular/common/http';

import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
@NgModule({
  declarations: [DepartmentComponent, CreateDepartmentComponent],
  imports: [
    CommonModule,
    DepartmentRoutingModule,
    ReactiveFormsModule,HttpClientModule,ToastModule,
    ProgressSpinnerModule
  ],
  providers:[DepartmentService,
    MessageService]
})
export class DepartmentModule { }
