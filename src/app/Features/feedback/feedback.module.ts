import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedbackRoutingModule } from './feedback-routing.module';
import { FeedbackComponent } from './feedback.component';
import { MyFeedbackComponent } from './my-feedback/my-feedback.component';
import { TeamFeedbackComponent } from './team-feedback/team-feedback.component';


@NgModule({
  declarations: [FeedbackComponent, MyFeedbackComponent, TeamFeedbackComponent],
  imports: [
    CommonModule,
    FeedbackRoutingModule
  ]
})
export class FeedbackModule { }
