import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import {
  GoogleLoginProvider,
 
} from '@abacritt/angularx-social-login';
import {  GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
import { AppComponent } from './app.component';
import { SigninComponent } from './components/signin/signin.component';
 import {MatFormFieldModule} from '@angular/material/form-field';
 import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import {MatIconModule} from '@angular/material/icon';
import { DisplayComponent } from './components/display/display.component';
import { GetbooksComponent } from './components/getbooks/getbooks.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import {MatCardModule} from '@angular/material/card';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { CartComponent } from './components/cart/cart.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { OrderPlacedComponent } from './components/order-placed/order-placed.component';
import { FilterPipe } from './components/pipes/filter.pipe';
import {MatPaginatorModule} from '@angular/material/paginator';
import {NgxPaginationModule} from 'ngx-pagination';
import { ClickOutsideModule } from 'ng-click-outside';
import { SortPipe } from './components/pipes/sort.pipe';
import {MatBadgeModule} from '@angular/material/badge';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    DashboardComponent,
    HeaderComponent,
    DisplayComponent,
    GetbooksComponent,
    BookDetailComponent,
    WishlistComponent,
    CartComponent,
    CustomerDetailsComponent,
    OrderSummaryComponent,
    OrderPlacedComponent,
    FilterPipe,
    SortPipe,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   MatFormFieldModule,
     MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatIconModule,
    MatCardModule,
    MatPaginatorModule,
    NgxPaginationModule,
    ClickOutsideModule,
    SocialLoginModule,
     GoogleSigninButtonModule,
     MatBadgeModule
  ],
  providers: [CartComponent,[
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '142096698169-sj5khfsq34nsddj5r06k3fqlcml0b6u2.apps.googleusercontent.com'
            )
          },
         
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ]],
  bootstrap: [AppComponent]
})
export class AppModule { }
