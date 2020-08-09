import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillRoutingModule } from './skill-routing.module';
import { SkillComponent } from './skill.component';
import { MySkillComponent } from './my-skill/my-skill.component';
import { EvaluateSkillComponent } from './evaluate-skill/evaluate-skill.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {SliderModule} from 'primeng/slider';
import {ToastModule} from 'primeng/toast';
@NgModule({
  declarations: [SkillComponent, MySkillComponent, EvaluateSkillComponent],
  imports: [
    CommonModule,
    SkillRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SliderModule,
    ToastModule
  ]
})
export class SkillModule { }
