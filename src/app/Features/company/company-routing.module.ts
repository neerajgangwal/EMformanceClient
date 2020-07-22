import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyComponent } from './company.component';
import { UpdateCompanyComponent } from './update-company/update-company.component';
import { ReactiveFormsModule } from '@angular/forms'
const routes: Routes = [{ path: '', component: CompanyComponent },

{ path: 'update', pathMatch: 'full', component: UpdateCompanyComponent,data :{ Title:'' ,ShowHeader:false,ShowNavBar:false} }];

@NgModule({
  imports: [RouterModule.forChild(routes),
    ReactiveFormsModule],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
