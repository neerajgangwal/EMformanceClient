import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MyTaskComponent} from './my-task/my-task.component';
import {TeamTaskComponent} from './team-task/team-task.component';

const routes: Routes = [{ path: 'team-task', component: TeamTaskComponent ,data :{ Title:'Team List' ,ShowHeader:true,ShowNavBar:true}},
{ path: 'my-task', component: MyTaskComponent ,data :{ Title:'Team List' ,ShowHeader:true,ShowNavBar:true}}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
