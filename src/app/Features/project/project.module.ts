import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';

import { ProjectListComponent } from './project-list/project-list.component';
import {ProjectService} from './project.service';
import { HttpClientModule } from "@angular/common/http";
import {ReactiveFormsModule} from '@angular/forms';
import { CreateProjectComponent } from './create-project/create-project.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import {PipesModule} from '../../Shared/pipes/pipes.module';



@NgModule({
  declarations: [ProjectComponent, ProjectListComponent, CreateProjectComponent, EditProjectComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule,HttpClientModule,ReactiveFormsModule,PipesModule
  ],providers:[
    ProjectService
  ]
})
export class ProjectModule { }
