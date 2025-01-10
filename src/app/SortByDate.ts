import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({ name: 'SortByDate' })
export class SortbydatepipePipe implements PipeTransform {
  transform(products: Product[], sortOption: string): Product[] {
    if (sortOption === 'dateAsc') {
      return products.slice().sort((a, b) => a.createdDate.getTime() - b.createdDate.getTime());
    } else if (sortOption === 'dateDesc') {
      return products.slice().sort((a, b) => b.createdDate.getTime() - a.createdDate.getTime());
    }
    return products; // Retourne la liste inchangée si aucun tri par date n'est sélectionné
  }
}
