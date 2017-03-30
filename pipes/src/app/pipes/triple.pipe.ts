import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'triple'
})
export class TriplePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value * 3;
  }

}
