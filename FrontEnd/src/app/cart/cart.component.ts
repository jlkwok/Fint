import { Component, OnInit } from '@angular/core';
import { CartItemService } from '../shared/services/cart-item.service';
import { CartItem } from '../shared/models/cartItem';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems:CartItem[];

  constructor(private cartItemService: CartItemService, private route: ActivatedRoute) { }

  ngOnInit() {
    const userId = +this.route.snapshot.paramMap.get('userId');
    //this.itemImages = ["../../assets/placeholder.png", "../../assets/avatar.png"];
    this.cartItemService.getFinteeCart(userId).subscribe(cartItems => {
      this.cartItems = cartItems;
    });
  }
}
