import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateRoleComponent} from './create-role/create-role.component'

const routes: Routes = [{ path: 'create', component: CreateRoleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleRoutingModule { }
