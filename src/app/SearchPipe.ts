import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'SearchPipe'
})
export class SearchPipe implements PipeTransform {
  transform(products: Product[], searchText: string): Product[] {
    if (!searchText) {
      return products;
    }
    searchText = searchText.toLowerCase();
    return products.filter(product =>
      product.name.toLowerCase().includes(searchText)
    );
  }
}
