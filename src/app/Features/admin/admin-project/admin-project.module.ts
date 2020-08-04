import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminProjectRoutingModule } from './admin-project-routing.module';
import { AdminProjectComponent } from './admin-project.component';
import { HttpClientModule } from "@angular/common/http";
import {ReactiveFormsModule} from '@angular/forms';
import {AdminProjectService} from './admin-project.service'


@NgModule({
  declarations: [AdminProjectComponent],
  imports: [
    CommonModule,HttpClientModule,
    AdminProjectRoutingModule,ReactiveFormsModule
  ],
  providers:[AdminProjectService]
})
export class AdminProjectModule { }
