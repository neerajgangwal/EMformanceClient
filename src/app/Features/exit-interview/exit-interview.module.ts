import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExitInterviewRoutingModule } from './exit-interview-routing.module';
import { ExitInterviewComponent } from './exit-interview.component';
import { SurveyFormComponent } from './survey-form/survey-form.component';
import { ExactResponseComponent } from './exact-response/exact-response.component';
import { GeneralResponseComponent } from './general-response/general-response.component';


@NgModule({
  declarations: [ExitInterviewComponent, SurveyFormComponent, ExactResponseComponent, GeneralResponseComponent],
  imports: [
    CommonModule,
    ExitInterviewRoutingModule
  ]
})
export class ExitInterviewModule { }
