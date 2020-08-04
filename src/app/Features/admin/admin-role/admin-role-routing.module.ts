import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminRoleComponent } from './admin-role.component';
import {AdminRoleListComponent} from './admin-role-list/admin-role-list.component';
import {AdminRoleCreateComponent} from './admin-role-create/admin-role-create.component';

const routes: Routes = [{ path: 'create', component: AdminRoleCreateComponent },{path: 'list', component: AdminRoleListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoleRoutingModule { }
