import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EvaluateListComponent} from './evaluate-list/evaluate-list.component'
import {EvaluateComponent} from './evaluate.component'



const routes: Routes = [{ path: '', component:EvaluateListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvaluateRoutingModule { }
