import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OutfintComponent } from './outfint/outfint.component';
import { ProfileComponent } from './profile/profile.component';
import { CartComponent } from './cart/cart.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ItemComponent } from './item/item.component';
import { ReviewComponent } from './review/review.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { ItemCardComponent } from './item-card/item-card.component';


const routes: Routes = [
  { path: '', redirectTo: 'SignIn', pathMatch: 'full' },
  { path: 'SignIn', component:SignInComponent },
  { path: 'Home', component:HomeComponent },
  { path: 'Outfint', component:OutfintComponent },
  { path: 'Profile', component:ProfileComponent },
  { path: 'Cart', component:CartComponent },
  { path: 'ProfileSettings', component:ProfileSettingsComponent },
  { path: 'Item', component:ItemComponent }, 
  { path: 'Review', component:ReviewComponent },
  { path: 'Outfinting', component:OutfintComponent },
  { path: 'CartItem', component:CartItemComponent },
  { path: 'ItemCard', component:ItemCardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
