import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes: Routes = [{ path: 'create', component: CreateEmployeeComponent },
 { path: 'list', component:EmployeeListComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
