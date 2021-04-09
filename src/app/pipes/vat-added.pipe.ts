import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatAdded'
})
export class VatAddedPipe implements PipeTransform {
//ilk değer pipeımızın değiştirmek isted.değer //2.si ise ilk parametremiz
  transform(value: number,rate:number): number {//dönüş tipini verdik , args parametre
    return value + (value*rate/100);
  }

}
