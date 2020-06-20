import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateDepartmentComponent} from './create-department/create-department.component'
import {DepartmentComponent} from './department.component'



const routes: Routes = [{ path: 'create', component:CreateDepartmentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentRoutingModule { }
