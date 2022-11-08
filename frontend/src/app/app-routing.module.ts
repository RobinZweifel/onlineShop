import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  {path: 'home', component: AppComponent },
  {path: 'cart', component: ShoppingCartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
