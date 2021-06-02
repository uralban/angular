import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { CheckOutPageComponent } from './components/check-out-page/check-out-page.component';
import { ThankYouPageComponent } from './components/thank-you-page/thank-you-page.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: ProductPageComponent},
  {path: 'check-out', component: CheckOutPageComponent},
  {path: 'thank-you', component: ThankYouPageComponent},  
  {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }