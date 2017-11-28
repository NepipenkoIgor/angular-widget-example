import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'makeFilterMenu'
})
export class MakeFilterMenuPipe implements PipeTransform {

  transform(value: IItem[]): any {
    if (!Array.isArray(value)) {
      return;
    }
    return new Set(value.map((item: IItem) => item.type));
  }

}
