import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminSubscriptionRoutingModule } from './admin-subscription-routing.module';
import { AdminSubscriptionComponent } from './admin-subscription.component';


@NgModule({
  declarations: [AdminSubscriptionComponent],
  imports: [
    CommonModule,
    AdminSubscriptionRoutingModule
  ]
})
export class AdminSubscriptionModule { }
