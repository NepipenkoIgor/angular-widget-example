import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  public transform(phone: number): string {
    if (!phone) {
      return;
    }
    return `${phone.toString()
      .slice(0, 3)} ${phone.toString()
      .slice(3, 7)} ${phone.toString()
      .slice(7, 10)}`;
  }

}
