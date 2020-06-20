import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';
import { ProjectListComponent } from './project-list/project-list.component';
import {ProjectService} from './project.service';
import { HttpClientModule } from "@angular/common/http";




@NgModule({
  declarations: [ProjectComponent, ProjectListComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule,HttpClientModule,
  ],providers:[
    ProjectService
  ]
})
export class ProjectModule { }
