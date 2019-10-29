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
import { DatePickerComponent } from './date-picker/date-picker.component';
import { ReviewComponent } from './review/review.component';
import { ItemCardComponent } from './item-card/item-card.component';
import { PastFintCardComponent } from './past-fint-card/past-fint-card.component';
import { OutfintCardComponent } from './outfint-card/outfint-card.component';
import { CartItemComponent } from './cart-item/cart-item.component';

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
    DatePickerComponent,
    ReviewComponent,
    ItemCardComponent,
    PastFintCardComponent,
    OutfintCardComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
