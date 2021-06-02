import { ShopModule } from './modules/shop/shop.module';
import { ProductsService } from './shared/products.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ProductsPipe } from './products.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ThankYouPageComponent } from './components/thank-you-page/thank-you-page.component';
import { CheckOutPageComponent } from './components/check-out-page/check-out-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ThankYouPageComponent,
    CheckOutPageComponent,
    NotFoundPageComponent,
    ProductPageComponent,
    ProductsPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    ShopModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
