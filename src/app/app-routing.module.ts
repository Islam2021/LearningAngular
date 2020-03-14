import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { CartComponent } from './components/cart/cart.component';
import { GoodsComponent } from './components/goods/goods.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "login", component: SigninComponent},
  {path: "signup", component: SignupComponent},
  {path: "cart", component: CartComponent},
  {path: "admin", component: GoodsComponent},
  {path: "**", component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const ComponentRouting = [
                                HomeComponent, 
                                SigninComponent, 
                                SignupComponent, 
                                CartComponent,
                                GoodsComponent,
                                PageNotFoundComponent]
