import { ProductsService } from './shared/products.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'products'
})
export class ProductsPipe implements PipeTransform {

  constructor(private productsService: ProductsService){}

  transform(value: any, ...args: any[]): unknown {
    
    let prop = args[0];
    let products = this.productsService.products[value];
    console.log('pipe', value, prop, products);

    return products[prop];
  }

}
