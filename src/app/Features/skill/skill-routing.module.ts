import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SkillComponent } from './skill.component';
import { MySkillComponent } from './my-skill/my-skill.component';
import { EvaluateSkillComponent } from './evaluate-skill/evaluate-skill.component';

const routes: Routes = [{ path: 'MySkill', component: MySkillComponent,data :{ Title:'Team List' ,ShowHeader:true,ShowNavBar:true} },
{ path: 'EvaluateSkill', component: EvaluateSkillComponent,data :{ Title:'Team List' ,ShowHeader:true,ShowNavBar:true} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillRoutingModule { }
