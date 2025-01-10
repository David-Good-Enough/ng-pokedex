import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({name: 'SortByName'})
export class SortByNamePipe implements PipeTransform {
  transform(products: Product[], sortOption: string): Product[] {
    if (sortOption === 'nameAsc') {
      return products.slice().sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === 'nameDesc') {
      return products.slice().sort((a, b) => b.name.localeCompare(a.name));
    }
    return products; // Retourne la liste inchangée si aucun tri alphabétique n'est sélectionné
  }
}
