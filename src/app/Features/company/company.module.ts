import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import { UpdateCompanyComponent } from './update-company/update-company.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [CompanyComponent, UpdateCompanyComponent],
  imports: [
    CommonModule,
    CompanyRoutingModule,ReactiveFormsModule
  ]
})
export class CompanyModule { }
