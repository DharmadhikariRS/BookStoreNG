import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { GetbooksComponent } from './components/getbooks/getbooks.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderPlacedComponent } from './components/order-placed/order-placed.component';
import { authGuard } from './components/guard/auth.guard';
const routes: Routes = [

  {path:'',component:SigninComponent},
   {path:'signin',component:SigninComponent},
  {path:'dashboard',component:DashboardComponent,
children:[{path:'bookdetail',component:BookDetailComponent,},
{path:'getallbooks',component:GetbooksComponent,},
{path:'wishlist',component:WishlistComponent,canActivate:[authGuard]},
{path:'cart',component:CartComponent,canActivate:[authGuard]}]},
  {path:'orderplaced',component:OrderPlacedComponent,canActivate:[authGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
