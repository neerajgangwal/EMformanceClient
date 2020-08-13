import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataNumberFilter'
})
export class DataNumberFilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
