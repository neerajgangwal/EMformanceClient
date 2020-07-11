import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MyGoalComponent} from './my-goal/my-goal.component'

import { GoalsComponent } from './goals.component';

const routes: Routes = [{ path: 'mygoals', component: MyGoalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoalsRoutingModule { }
