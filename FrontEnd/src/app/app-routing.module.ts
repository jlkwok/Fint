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
  { path: ':userId/home', component:HomeComponent },
  { path: ':userId/home/:query', component:HomeComponent },
  { path: ':userId/outfint', component:OutfintComponent },
  { path: ':userId/profile', component:ProfileComponent },
  { path: 'cart/:userId', component:CartComponent },
  { path: ':userId/profileSettings', component:ProfileSettingsComponent },
  { path: ':userId/item/:id', component:ItemComponent }, 
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
