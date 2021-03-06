import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleRoutingModule } from './role-routing.module';
import { RoleComponent } from './role.component';
import { CreateRoleComponent } from './create-role/create-role.component';

import {HttpClientModule} from '@angular/common/http';
import {RoleService} from './role.service';
import {ReactiveFormsModule} from '@angular/forms';
import { RoleListComponent } from './role-list/role-list.component';
import { EditRoleComponent } from './edit-role/edit-role.component';
import {AutoCompleteModule} from 'primeng/autocomplete';


@NgModule({
  declarations: [RoleComponent, CreateRoleComponent, RoleListComponent, EditRoleComponent],
  imports: [
    CommonModule,HttpClientModule,
    RoleRoutingModule,ReactiveFormsModule,AutoCompleteModule
  ],
  providers:[RoleService]
})
export class RoleModule { }
