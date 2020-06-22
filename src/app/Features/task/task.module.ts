import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './task.component';

import { TeamTaskComponent } from './team-task/team-task.component';
import { MyTaskComponent } from './my-task/my-task.component';

import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {TaskService} from './task.service';
import { MyTaskCreateComponent } from './my-task-create/my-task-create.component';
import { TeamTaskCreateComponent } from './team-task-create/team-task-create.component'


@NgModule({
  declarations: [TaskComponent, TeamTaskComponent, MyTaskComponent, MyTaskCreateComponent, TeamTaskCreateComponent],
  imports: [
    CommonModule,
    TaskRoutingModule,HttpClientModule,ReactiveFormsModule
  ],
  providers:[TaskService]
})
export class TaskModule { }
