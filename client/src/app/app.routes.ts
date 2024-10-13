import { Routes } from '@angular/router';
import { ProductsComponent } from './components/pages/products/products.component';
import { HomeComponent } from './components/pages/home/home.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    { path: 'products/search/:searchTerm', component: ProductsComponent}
];
