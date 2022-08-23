import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditComponent } from './components/Brands/edit/edit.component';
import { FormsModule } from '@angular/forms';
import { EditSupermarketsComponent } from './components/SuperMarkets/edit-supermarkets/edit-supermarkets.component';
import { EditProductsComponent } from './components/Products/edit-products/edit-products.component';
import { EditShoppinglistComponent } from './components/ShoppingList/edit-shoppinglist/edit-shoppinglist.component';

@NgModule({
  declarations: [
    AppComponent,
    EditShoppinglistComponent,
    EditComponent,
    EditSupermarketsComponent,
    EditProductsComponent,
    routingComponents,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
