import { Component, OnInit } from '@angular/core';
import { CartItemService } from '../shared/services/cart-item.service';
import { TransactionService } from '../shared/services/transaction.service';
import { CartItem } from '../shared/models/cartItem';
import { Transaction } from '../shared/models/transaction';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems:CartItem[];
  price:number;

  constructor(private transactionService: TransactionService ,private cartItemService: CartItemService, private route: ActivatedRoute) { }

  ngOnInit() {
    const userId = +this.route.snapshot.paramMap.get('userId');
    //this.itemImages = ["../../assets/placeholder.png", "../../assets/avatar.png"];
    this.cartItemService.getFinteeCart(userId).subscribe(cartItems => {
      this.cartItems = cartItems;  
    });
    this.cartItemService.getCartPrice(userId).subscribe(price => this.price = price);
  }

  fintCart() {
    const userId = +this.route.snapshot.paramMap.get('userId');
    for(let cartItem of this.cartItems){
      let transaction = new Transaction(cartItem.id.itemId, userId, cartItem.endDate);
      this.transactionService.fint(transaction).subscribe();
      this.cartItemService.removeFromCart(cartItem.id).subscribe(response => {
        this.cartItemService.getFinteeCart(userId).subscribe(cartItems => {
          this.cartItems = cartItems;  
        });
        this.cartItemService.getCartPrice(userId).subscribe(price => this.price = price);    
      });
    }
    alert("Cart finted!");
  }
}
