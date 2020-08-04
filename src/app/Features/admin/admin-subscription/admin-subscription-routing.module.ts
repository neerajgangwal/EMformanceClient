import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminSubscriptionComponent } from './admin-subscription.component';

const routes: Routes = [{ path: '', component: AdminSubscriptionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminSubscriptionRoutingModule { }
