import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBrandsComponent } from './components/Brands/edit/add-brands/add-brands.component';
import { AddProductsComponent } from './components/Products/add-products/add-products.component';
import { AddShoppingListComponent } from './components/ShoppingList/add-shopping-list/add-shopping-list.component';
import { AddSupermarketsComponent } from './components/SuperMarkets/add-supermarkets/add-supermarkets.component';

const routes: Routes = [
  { path: 'brands', component: AddBrandsComponent },
  { path: 'products', component: AddProductsComponent },
  { path: 'superMarkets', component: AddSupermarketsComponent },
  { path: 'shoppingLists', component: AddShoppingListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AddBrandsComponent, AddProductsComponent, AddSupermarketsComponent, AddShoppingListComponent]