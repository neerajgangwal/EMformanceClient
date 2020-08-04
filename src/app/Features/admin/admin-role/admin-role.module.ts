import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoleRoutingModule } from './admin-role-routing.module';
import { AdminRoleComponent } from './admin-role.component';
import { AdminRoleCreateComponent } from './admin-role-create/admin-role-create.component';
import {HttpClientModule} from '@angular/common/http'
import {AdminRoleService} from './admin-role.service';
import {ReactiveFormsModule} from '@angular/forms';





import { AdminRoleListComponent } from './admin-role-list/admin-role-list.component';



@NgModule({
  declarations: [AdminRoleComponent, AdminRoleCreateComponent, AdminRoleListComponent],
  imports: [
    CommonModule,HttpClientModule,
    AdminRoleRoutingModule,ReactiveFormsModule
  ],
  providers:[AdminRoleService]

})
export class AdminRoleModule { }
