import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleRoutingModule } from './role-routing.module';
import { RoleComponent } from './role.component';
import { CreateRoleComponent } from './create-role/create-role.component';
import {HttpClientModule} from '@angular/common/http';
import {RoleService} from './role.service';
import {ReactiveFormsModule} from '@angular/forms';
import { RoleListComponent } from './role-list/role-list.component';

@NgModule({
  declarations: [RoleComponent, CreateRoleComponent, RoleListComponent],
  imports: [
    CommonModule,HttpClientModule,
    RoleRoutingModule,ReactiveFormsModule
  ],
  providers:[RoleService]
})
export class RoleModule { }
