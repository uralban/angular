import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartPageComponent } from './components/cart-page/cart-page.component';

const routes: Routes = [
  {path: 'cart', children: [
    {path: '', component: CartPageComponent},
    {path: ':action/:id', component: CartPageComponent}
  ]}
];

@NgModule({
  declarations: [
    CartPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    NgbModule
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class ShopModule { }
