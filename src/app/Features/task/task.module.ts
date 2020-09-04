import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './task.component';

import { TeamTaskComponent } from './team-task/team-task.component';
import { MyTaskComponent } from './my-task/my-task.component';

import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {TaskService} from './task.service';
import {PipesModule} from '../../Shared/pipes/pipes.module'
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [TaskComponent,
    TeamTaskComponent,
    MyTaskComponent],
  imports: [
    CommonModule,
    TaskRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    PipesModule,
    FormsModule
  ],
  providers:[TaskService]
})
export class TaskModule { }
