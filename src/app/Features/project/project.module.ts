import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';

import { ProjectListComponent } from './project-list/project-list.component';
import {ProjectService} from './project.service';
import { HttpClientModule } from "@angular/common/http";
import {ReactiveFormsModule} from '@angular/forms';
import { CreateProjectComponent } from './create-project/create-project.component';




@NgModule({
  declarations: [ProjectComponent, ProjectListComponent, CreateProjectComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule,HttpClientModule,ReactiveFormsModule
  ],providers:[
    ProjectService
  ]
})
export class ProjectModule { }
