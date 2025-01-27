import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product';
import { UpperCasePipe } from '@angular/common';
import {DatePipe} from '@angular/common';


@Component({
  selector: 'app-product-card',
  imports: [ UpperCasePipe, DatePipe ],
  template: `
  <div>
    <h1>{{product.name | uppercase}}</h1> 
    <h2>{{product.createdDate | date: 'longDate':'UTC':'fr'}}</h2> 
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
export class ProductCardComponent {
  @Input({required:true}) product: Product = {id: 0, name: '', isFavorite: false, createdDate: new Date()};
  @Output() addItemEvent = new EventEmitter<number>();

  switchFavorite() {
    this.product.isFavorite = !this.product.isFavorite;
    this.addItemEvent.emit(this.product.isFavorite ? 1 : -1);
  }
}
