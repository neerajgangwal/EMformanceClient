import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleRoutingModule } from './role-routing.module';
import { RoleComponent } from './role.component';
import { CreateRoleComponent } from './create-role/create-role.component';
import {HttpClientModule} from '@angular/common/http';
import {RoleService} from './role.service'


@NgModule({
  declarations: [RoleComponent, CreateRoleComponent],
  imports: [
    CommonModule,HttpClientModule,
    RoleRoutingModule
  ],
  providers:[RoleService]
})
export class RoleModule { }
