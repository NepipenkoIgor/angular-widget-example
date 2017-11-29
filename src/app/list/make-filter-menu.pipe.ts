import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'makeFilterMenu'
})
export class MakeFilterMenuPipe implements PipeTransform {

  public transform(value: IItem[]): Set<string> {
    if (!Array.isArray(value)) {
      return;
    }
    return new Set(value.map((item: IItem) => item.type));
  }

}
