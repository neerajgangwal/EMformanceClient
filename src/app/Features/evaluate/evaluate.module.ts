import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {EvaluateRoutingModule} from './evaluate-routing.module'
import { EvaluateComponent } from './evaluate.component';
import { EvaluateListComponent } from './evaluate-list/evaluate-list.component';

import {HttpClientModule} from '@angular/common/http'
import {ReactiveFormsModule} from '@angular/forms'
import {EvaluateService} from './evaluate.service'



@NgModule({
  declarations: [EvaluateComponent, EvaluateListComponent],
  imports: [
    CommonModule,
    EvaluateRoutingModule,ReactiveFormsModule,HttpClientModule,
  ],
  providers:[]
})
export class EvaluateModule { }
