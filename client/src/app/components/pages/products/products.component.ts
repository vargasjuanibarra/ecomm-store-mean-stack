import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../../services/products.service';
import { Product } from '../../../shared/models/Product';
import { StarRatingComponent } from '../../star-rating/star-rating.component';
import { FiltersComponent } from '../../filters/filters.component';
import { ActivatedRoute } from '@angular/router';
import { SearchComponent } from '../../partials/search/search.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, StarRatingComponent, FiltersComponent, SearchComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(private productsService: ProductsService, activatedRoute:ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      if(params['searchTerm']) {
        this.products = this.productsService.getAllProductsBySearchTerm(params['searchTerm'])
      } else {
        this.products = this.productsService.getAll();
      }
    })
  }

  ngOnInit(): void {

  }
}
