import { Component, OnInit } from '@angular/core';
import { CartItemService } from '../shared/services/cart-item.service';
import { TransactionService } from '../shared/services/transaction.service';
import { CartItem } from '../shared/models/cartItem';
import { Transaction } from '../shared/models/transaction';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems:CartItem[];
  price:number;
  userId: number;
  itemCount: number;

  constructor(private transactionService: TransactionService ,private cartItemService: CartItemService, private userService: UserService) { }

  ngOnInit() {
    this.userId = this.userService.currentUserId;
    this.cartItemService.getFinteeCart(this.userId).subscribe(cartItems => {
      this.cartItems = cartItems;  
    });
    this.cartItemService.getCartPrice(this.userId).subscribe(price => this.price = price);
    this.cartItemService.getCartCount(this.userId).subscribe(itemCount => this.itemCount=itemCount);
  }

  fintCart() {
    for(let cartItem of this.cartItems){
      let transaction = new Transaction(cartItem.id.itemId, this.userId, cartItem.endDate);
      this.transactionService.fint(transaction).subscribe();
      this.cartItemService.removeFromCart(cartItem.id).subscribe(response => {
        this.cartItemService.getFinteeCart(this.userId).subscribe(cartItems => {
          this.cartItems = cartItems;  
        });
        this.cartItemService.getCartPrice(this.userId).subscribe(price => this.price = price);    
      });
    }
    alert("Cart finted!");
  }
}
