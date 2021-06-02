import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-out-page',
  templateUrl: './check-out-page.component.html',
  styleUrls: ['./check-out-page.component.css']
})
export class CheckOutPageComponent implements OnInit {

  checkOutForm: FormGroup;
  cart: any[] = [];

  constructor(private router: Router) {

    this.checkOutForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, this.customValid]),
      lastName: new FormControl('', [Validators.required, this.customValid]),
      tel: new FormControl('', [
        Validators.required,
        Validators.pattern(/(\d?)(\d{3})(\d{3})(\d{2})(\d{2})/)
      ]),
      email: new FormControl('', [Validators.required, Validators.email])
    });
   }

  ngOnInit(): void {
    this.cart = JSON.parse(localStorage.getItem('cart')) || [];
  }

  customValid(control: FormControl) {    
    
    if (control.value.length > 25) {
      return {custom: {message: 'too long'}};
    }
    if (control.value.length < 3) {
      return {custom: {message: 'too short'}};
    }
    
    return null;
  }

  submitAction(event: any) {
    event.preventDefault();

    if (this.cart.length > 0){
      console.log('Check out complete: ', this.checkOutForm.value, this.cart);
      localStorage.removeItem('cart');
      this.router.navigate(['thank-you']);
    } else {
      console.log('Please select items first');
      this.router.navigate(['']);
    }
  }

}
