import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataFilter',
  pure:false
})
export class DataFilterPipe implements PipeTransform {

  transform(items: any[], field : string, value : any): any[] {
    if (!items) return [];
    if(!value) return items;
    console.log(typeof value);
    if(typeof value=="number")
    {
      console.log("Not Number");
      return items.filter(it =>it[field]==value);
    }

    if (!value || value.length == 0) return items;
    return items.filter(it =>
    it[field].toLowerCase().indexOf(value.toLowerCase()) !=-1);
  }

}
