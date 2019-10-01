import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OutfintComponent } from './outfint/outfint.component';
import { ProfileComponent } from './profile/profile.component';
import { CartComponent } from './cart/cart.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { SignInComponent } from './sign-in/sign-in.component';


const routes: Routes = [
  { path: '', redirectTo: 'SignIn', pathMatch: 'full' },
  { path: 'SignIn', component:SignInComponent },
  { path: 'Home', component:HomeComponent },
  { path: 'Outfint', component:OutfintComponent },
  { path: 'Profile', component:ProfileComponent },
  { path: 'Cart', component:CartComponent },
  { path: 'ProfileSettings', component:ProfileSettingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
