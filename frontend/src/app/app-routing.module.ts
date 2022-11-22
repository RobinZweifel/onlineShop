import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";
import {HomeComponent} from "./home/home.component";
import {SuccessComponent} from "./success/success.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'cart', component: ShoppingCartComponent},
  {path: 'home', component: HomeComponent},
  {path: 'success', component: SuccessComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
