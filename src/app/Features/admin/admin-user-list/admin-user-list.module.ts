import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {AdminUserListService} from './admin-user-list.service'


import { AdminUserListRoutingModule } from './admin-user-list-routing.module';
import { AdminUserListComponent } from './admin-user-list.component';


@NgModule({
  declarations: [AdminUserListComponent],
  imports: [
    CommonModule,ReactiveFormsModule,
    AdminUserListRoutingModule,HttpClientModule
  ],
  providers:[AdminUserListService]
})
export class AdminUserListModule { }
