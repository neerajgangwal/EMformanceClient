import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoalsRoutingModule } from './goals-routing.module';
import { GoalsComponent } from './goals.component';
import { MyGoalComponent } from './my-goal/my-goal.component';

import {HttpClientModule} from '@angular/common/http';
import {GoalsService} from './goals.service';

@NgModule({
  declarations: [GoalsComponent, MyGoalComponent],
  imports: [
    CommonModule,
    GoalsRoutingModule,
    HttpClientModule
  ],
  providers:[
    GoalsService
  ]
})
export class GoalsModule { }
