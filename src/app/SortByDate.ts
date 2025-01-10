import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({name: 'SortByDate'})
export class SortbydatepipePipe implements PipeTransform {
  transform(products: Product[], asc: boolean = true): Product[] {
    return products.slice().sort((a, b) => { 
      return asc ? a.createdDate.getTime() - b.createdDate.getTime()
                 : b.createdDate.getTime() - a.createdDate.getTime();
    });
  }
}
