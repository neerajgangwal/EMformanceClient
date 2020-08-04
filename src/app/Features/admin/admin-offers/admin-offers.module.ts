import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminOffersRoutingModule } from './admin-offers-routing.module';
import { AdminOffersComponent } from './admin-offers.component';


@NgModule({
  declarations: [AdminOffersComponent],
  imports: [
    CommonModule,
    AdminOffersRoutingModule
  ]
})
export class AdminOffersModule { }
