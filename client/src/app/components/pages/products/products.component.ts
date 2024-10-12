import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../../services/products.service';
import { Product } from '../../../shared/models/Product';
import { StarRatingComponent } from '../../star-rating/star-rating.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, StarRatingComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.products = this.productsService.getAll();
  }
}
