import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoalsRoutingModule } from './goals-routing.module';
import { GoalsComponent } from './goals.component';
import { MyGoalComponent } from './my-goal/my-goal.component';

import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import {GoalsService} from './goals.service';
import { TeamGoalComponent } from './team-goal/team-goal.component';
import {SliderModule} from 'primeng/slider';
import {DialogModule} from 'primeng/dialog';

@NgModule({
  declarations: [GoalsComponent, MyGoalComponent, TeamGoalComponent],
  imports: [
    CommonModule,
    GoalsRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SliderModule,
    FormsModule,
    DialogModule
  ],
  providers:[
    GoalsService
  ]
})
export class GoalsModule { }
