import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path: 'cart', component: ShoppingCartComponent},
  {path: 'home', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
