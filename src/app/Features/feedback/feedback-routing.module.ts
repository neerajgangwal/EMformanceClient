import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { FeedbackComponent } from './feedback.component';
import { MyFeedbackComponent } from './my-feedback/my-feedback.component';
import { TeamFeedbackComponent } from './team-feedback/team-feedback.component';

const routes: Routes = [{ path: 'MyFeedback', component: MyFeedbackComponent,data :{ Title:'Team List' ,ShowHeader:true,ShowNavBar:true} },
{ path: 'TeamFeedback', component: TeamFeedbackComponent,data :{ Title:'Team List' ,ShowHeader:true,ShowNavBar:true} }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedbackRoutingModule { }
