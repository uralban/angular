import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: any[] = [];
  productsObj: any = {};
  product: any = {};
  productsUrl = 'http://my-json-server.typicode.com/achubirka/db/products';

  constructor(private http: HttpClient) {

  }

  loadProducts() {
    return new Observable(observer => {
      
      if (!this.products.length) {
        this.http.get(this.productsUrl).subscribe(products => {
          this.products = <any>products;
          this.products.forEach(element => {
            this.productsObj[element.id] = element;
          });

          observer.next(products);
          observer.complete();

          localStorage.setItem('products', JSON.stringify(this.products));          
        });
      } else {
        observer.next(this.products);
        observer.complete();
      }
      
    });

  }

  // loadProduct(id: string) {
  //   return new Observable(observer => {
  //     this.http.get(`${this.productsUrl}/${id}`).subscribe(product => {
  //       this.product = product;

  //       observer.next(product);
  //       observer.complete();
  //     });
  //   })
  // }
}
