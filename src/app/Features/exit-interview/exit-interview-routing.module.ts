import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ExactResponseComponent} from './exact-response/exact-response.component';
import {GeneralResponseComponent} from './general-response/general-response.component';
import {SurveyFormComponent} from './survey-form/survey-form.component';
const routes: Routes = [{ path: 'ExactResponse', component: ExactResponseComponent,data :{ Title:'Team List' ,ShowHeader:true,ShowNavBar:true} },
{ path: 'GeneralResponse', component: GeneralResponseComponent,data :{ Title:'Team List' ,ShowHeader:true,ShowNavBar:true} },
{ path: 'SurveyForm', component: SurveyFormComponent,data :{ Title:'Team List' ,ShowHeader:true,ShowNavBar:true} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExitInterviewRoutingModule { }
