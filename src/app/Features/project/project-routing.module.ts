import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectListComponent} from './project-list/project-list.component'
import { ProjectComponent } from './project.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import {EditProjectComponent} from './edit-project/edit-project.component'

const routes: Routes = [
  { path: 'list', component: ProjectListComponent,data :{ Title:'Project List' ,ShowHeader:true,ShowNavBar:true} },
  { path: 'create', component: CreateProjectComponent,data :{ Title:'Create Project' ,ShowHeader:true,ShowNavBar:true} },
  { path: 'edit', component: EditProjectComponent,data :{ Title:'Edit Project' ,ShowHeader:true,ShowNavBar:true} },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
