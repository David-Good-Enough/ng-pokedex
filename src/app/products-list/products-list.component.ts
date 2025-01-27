import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductCardComponent } from '../product-card/product-card.component';
import { SortbydatepipePipe } from '../SortByDate';
import { SearchPipe } from '../SearchPipe';
import { SortByNamePipe } from '../SortByNamePipe';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products-list',
  imports: [RouterOutlet, ProductCardComponent, SortbydatepipePipe, SearchPipe, SortByNamePipe, FormsModule],
  template: `
    <h2>Favorite products: {{cuntfavorite}}</h2>
    
    <!-- Barre de recherche -->
    <input type="text" [(ngModel)]="searchText" placeholder="Rechercher un personnage" />

    <!-- Select pour le tri -->
    <label for="sortOrder">Trier par :</label>
    <select id="sortOrder" [(ngModel)]="sortOption">
      <option value="nameAsc">Nom (A-Z)</option>
      <option value="nameDesc">Nom (Z-A)</option>
      <option value="dateAsc">Date (Croissant)</option>
      <option value="dateDesc">Date (Décroissant)</option>
    </select>
    
    <!-- Application des pipes de recherche et de tri -->
    @for (p of (product | SearchPipe: searchText | SortByName: sortOption | SortByDate: sortOption); track p.id) {
      <app-product-card 
        [product]="p"
        (addItemEvent)="addItem($event)"
      />
    }
    <router-outlet/>
  `,
  styles: [],
})
export class ProductsListComponent {
  title = 'ng-pokedex';
  cuntfavorite = 0;
  searchText = '';
  sortOption = 'nameAsc';
  productServ = inject(ProductService);  
  product = this.productServ.getProducts();

  addItem(item: number) {
    this.cuntfavorite += item;
  }

}
