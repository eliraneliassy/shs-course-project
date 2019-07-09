import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    // console.log(args);
    return value > args[0] ? value * args[1] : value
  }

}
