import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { ItemComponent } from './item/item.component';
import { OutfintComponent } from './outfint/outfint.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ReviewComponent } from './review/review.component';
import { ItemCardComponent } from './item-card/item-card.component';
import { PastFintCardComponent } from './past-fint-card/past-fint-card.component';
import { OutfintCardComponent } from './outfint-card/outfint-card.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { HttpClientModule } from '@angular/common/http'; 
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TitleCasePipe } from '@angular/common';
import { CurrentOutfintCardComponent } from './current-outfint-card/current-outfint-card.component';
import { CurrentFintCardComponent } from './current-fint-card/current-fint-card.component';
import { CookieService } from 'ngx-cookie-service';
import { NgxPayPalModule } from 'ngx-paypal';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CartComponent,
    ItemComponent,
    OutfintComponent,
    ProfileComponent,
    ProfileSettingsComponent,
    SignInComponent,
    ReviewComponent,
    ItemCardComponent,
    PastFintCardComponent,
    OutfintCardComponent,
    CartItemComponent,
    CurrentOutfintCardComponent,
    CurrentFintCardComponent
  ],
  imports: [
    NgxPayPalModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [TitleCasePipe, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
