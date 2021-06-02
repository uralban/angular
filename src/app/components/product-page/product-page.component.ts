import { ProductsService } from './../../shared/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  loading = false;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {

    this.loading = true;

    this.productsService.loadProducts().subscribe(() => {

      this.loading = false;
    });
  }

  get products() {    
    return this.productsService.products;
  }
}
