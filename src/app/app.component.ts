import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductCardComponent } from './product-card/product-card.component';
import { SortbydatepipePipe } from './SortByDate';
import { SearchPipe } from './SearchPipe';
import { SortByNamePipe } from './SortByNamePipe';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductCardComponent, SortbydatepipePipe, SearchPipe, SortByNamePipe, FormsModule],
  template: `
    <h1>Welcome to {{title}}!</h1>
    <h2>Favorite products: {{cuntfavorite}}</h2>
    
    <!-- Barre de recherche -->
    <input type="text" [(ngModel)]="searchText" placeholder="Rechercher un produit" />

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
export class AppComponent {
  title = 'ng-pokedex';
  cuntfavorite = 0;
  searchText = '';
  sortOption = 'nameAsc'; // Valeur par défaut
  product = [
    {id: 0, name: 'Harry Potter', isFavorite: false, createdDate: new Date(1980, 6, 31)},
    {id: 1, name: 'Ronnald Weasley', isFavorite: false, createdDate: new Date(1980, 3, 1)},
    {id: 2, name: 'Hermione Granger', isFavorite: false, createdDate: new Date(1979, 8, 19)},
    {id: 3, name: 'Neville Londubas', isFavorite: false, createdDate: new Date(1980, 7, 30)},
    {id: 4, name: 'Albus Dumbledore', isFavorite: false, createdDate: new Date(1881, 7, 30)},
    {id: 5, name: 'Severus Snape', isFavorite: false, createdDate: new Date(1960, 1, 9)},
    {id: 6, name: 'Draco Malfoy', isFavorite: false, createdDate: new Date(1980, 5, 5)},
    {id: 7, name: 'Luna Lovegood', isFavorite: false, createdDate: new Date(1981, 2, 13)},
    {id: 8, name: 'Ginny Weasley', isFavorite: false, createdDate: new Date(1981, 7, 11)},
    {id: 9, name: 'Fred Weasley', isFavorite: false, createdDate: new Date(1978, 3, 1)},
    {id: 10, name: 'George Weasley', isFavorite: false, createdDate: new Date(1978, 3, 1)},
    {id: 11, name: 'Minerva McGonagall', isFavorite: false, createdDate: new Date(1935, 9, 4)},
    {id: 12, name: 'Hagrid', isFavorite: false, createdDate: new Date(1928, 11, 6)},
    {id: 13, name: 'Sirius Black', isFavorite: false, createdDate: new Date(1960, 10, 11)},
    {id: 14, name: 'Remus Lupin', isFavorite: false, createdDate: new Date(1960, 2, 10)}
  ];

  addItem(item: number) {
    this.cuntfavorite += item;
  }
}
