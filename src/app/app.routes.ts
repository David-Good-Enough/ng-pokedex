import { Routes } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsDetailComponent } from './products-detail/products-detail.component';

export const routes: Routes = [
{
    path: '',
    title: 'ProductsList',
    component: ProductsListComponent,
},
{
    path: 'product/:id',
    title: 'DetailProduct',
    component: ProductsDetailComponent
}
];
