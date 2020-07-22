import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillRoutingModule } from './skill-routing.module';
import { SkillComponent } from './skill.component';
import { MySkillComponent } from './my-skill/my-skill.component';
import { EvaluateSkillComponent } from './evaluate-skill/evaluate-skill.component';


@NgModule({
  declarations: [SkillComponent, MySkillComponent, EvaluateSkillComponent],
  imports: [
    CommonModule,
    SkillRoutingModule
  ]
})
export class SkillModule { }
