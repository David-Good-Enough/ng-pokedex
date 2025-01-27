import { Component, Input, EventEmitter, Output, inject } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-products-detail',
  imports: [ UpperCasePipe ],
  template: `
  <div>
    <h1>{{product.name | uppercase}}</h1> 
    @if (product.isFavorite) {
      <span>
        Favorite product
        <button (click)="switchFavorite()">Undo favorite</button>
      </span>
    } @else {
      <span>
        Simple product
        <button (click)="switchFavorite()">Make favorite</button>
      </span>
    }
  </div>
  `,
  styles: ``
})
export class ProductsDetailComponent {
  product: Product = {id: 0, name: '', isFavorite: false, createdDate: new Date()};
  @Output() addItemEvent = new EventEmitter<number>();
  productService = inject(ProductService);

  switchFavorite() {
    this.product.isFavorite = !this.product.isFavorite;
    this.addItemEvent.emit(this.product.isFavorite ? 1 : -1);
  }

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.product = this.productService.getProductById(parseInt(params['id']));
    });
  }

}
