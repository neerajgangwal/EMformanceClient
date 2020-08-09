import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MyGoalComponent} from './my-goal/my-goal.component'
import {TeamGoalComponent} from './team-goal/team-goal.component'

import { GoalsComponent } from './goals.component';

const routes: Routes = [{ path: 'mygoal', component: MyGoalComponent,data :{ Title:'My Goal' ,ShowHeader:true,ShowNavBar:true}},
{ path: 'teamgoal', component: TeamGoalComponent,data :{ Title:'Team Goal' ,ShowHeader:true,ShowNavBar:true} }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoalsRoutingModule { }
