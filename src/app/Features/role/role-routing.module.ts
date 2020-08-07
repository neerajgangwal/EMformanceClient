import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CreateRoleComponent} from './create-role/create-role.component';
import { EditRoleComponent } from './edit-role/edit-role.component';
import {RoleListComponent} from './role-list/role-list.component';
const routes: Routes = [
  { path: 'create', component: CreateRoleComponent,data :{ Title:'Create Role' ,ShowHeader:true,ShowNavBar:true} },
  { path: 'edit', component: EditRoleComponent,data :{ Title:'Edit Role' ,ShowHeader:true,ShowNavBar:true} },
  { path: 'list', component:RoleListComponent,data :{ Title:'Role List' ,ShowHeader:true,ShowNavBar:true}}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleRoutingModule { }
