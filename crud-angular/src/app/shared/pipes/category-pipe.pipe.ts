import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    switch (value) {
      case 'front-end':
        return 'code'
        break;

      case 'back-end':
        return 'computer'
        break;

      default:
        break;
    }
    return 'code';
  }

}
