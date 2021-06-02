import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  products: any[] = [];
  cart: any[] = [];
  loading = false;

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {   

    this.loading = true;

    this.products = JSON.parse(localStorage.getItem('products'));
    this.cart = JSON.parse(localStorage.getItem('cart')) || [];    

    if (this.activeRoute.snapshot.params['action'] === 'add' && this.activeRoute.snapshot.params['id'] !== undefined) {
      let currentProduct = this.products.filter((element) => {
        if (element.id === +this.activeRoute.snapshot.params['id']){
          return element;
        }
      });
      let currentProductInCart = this.cart.filter((element) => {
        if (element.id === +this.activeRoute.snapshot.params['id']){
          return element;
        }
      });
      
      if (currentProductInCart.length == 0) {
        currentProduct[0].quantity = 1;
        this.cart.push(currentProduct[0]);
        localStorage.setItem('cart', JSON.stringify(this.cart));
        this.router.navigate(['cart']);
      } else {
        this.cart.forEach((element) => {
          if (element.id === currentProduct[0].id && currentProduct[0].available - element.quantity > 0){
            element.quantity++;
          }
        });
        localStorage.setItem('cart', JSON.stringify(this.cart));
        this.router.navigate(['cart']);
      }
    } else if (this.activeRoute.snapshot.params['action'] === 'remove' && this.activeRoute.snapshot.params['id'] !== undefined){
      this.cart = this.cart.filter((element) => {
        if (element.id !== +this.activeRoute.snapshot.params['id']){
          return element;
        } else if (element.id === +this.activeRoute.snapshot.params['id']
                    &&
                    element.quantity > 1){
          element.quantity--;
          return element;
        }
      });
      if (this.cart.length > 0) {
        localStorage.setItem('cart', JSON.stringify(this.cart));
      } else {
        localStorage.removeItem('cart');
      }
      this.router.navigate(['cart']);
    }

    this.loading = false;
  }

}
