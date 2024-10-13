import { Injectable } from '@angular/core';
import { Product } from '../shared/models/Product';
import { sampleProducts } from '../../data';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getAll():Product[] {
    return sampleProducts;
  }

  getAllProductsBySearchTerm(searchTerm: string) {
    return this.getAll().filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }
}
