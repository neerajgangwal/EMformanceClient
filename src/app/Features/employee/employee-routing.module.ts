import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';

const routes: Routes = [{ path: 'create', component: CreateEmployeeComponent,data :{ Title:'Create Employee' ,ShowHeader:true,ShowNavBar:true} },
 { path: 'list', component:EmployeeListComponent,data :{ Title:'Employee List' ,ShowHeader:true,ShowNavBar:true}},
 { path: 'view', component:ViewEmployeeComponent,data :{ Title:'Employee' ,ShowHeader:true,ShowNavBar:true}},
 { path: 'edit', component:EditEmployeeComponent,data :{ Title:'Edit Employee' ,ShowHeader:true,ShowNavBar:true}}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
