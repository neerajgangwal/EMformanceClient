import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataFilterPipe } from './data-filter.pipe';
import { DataNumberFilterPipe } from './data-number-filter.pipe';



@NgModule({
  declarations: [DataFilterPipe, DataNumberFilterPipe],
  imports: [
    CommonModule
  ],
  exports:[DataFilterPipe]
})
export class PipesModule { }
