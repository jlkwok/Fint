import { Component, OnInit } from '@angular/core';
import { CartItemService } from '../shared/services/cart-item.service';
import { TransactionService } from '../shared/services/transaction.service';
import { CartItem } from '../shared/models/cartItem';
import { Transaction } from '../shared/models/transaction';
import { UserService } from '../shared/services/user.service';
import { CookieService } from 'ngx-cookie-service';
import { ItemService } from '../shared/services/item.service';
import { Item } from '../shared/models/item';

declare let paypal: any;

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
  addScript: boolean = false;
  paypalLoad: boolean = true;

  constructor(private cookieService: CookieService, private itemService : ItemService, private transactionService: TransactionService ,private cartItemService: CartItemService, private userService: UserService) { }

  ngOnInit() {
    this.userId = parseInt(this.cookieService.get('currentUserId'));
    this.cartItemService.getFinteeCart(this.userId).subscribe(cartItems => {
      this.cartItems = cartItems;  
      for(let cartItem of this.cartItems){
        this.itemService.getItem(cartItem.id.itemId).subscribe(item => {
          if(!item.isAvailable){
            this.cartItemService.removeFromCart(cartItem.id).subscribe(response => {
              this.cartItemService.getFinteeCart(this.userId).subscribe(cartItems => {
                this.cartItems = cartItems;  
              });
              this.cartItemService.getCartPrice(this.userId).subscribe(price => this.price = price);    
            });
            alert(item.name + " is no longer available and has been removed from your cart.");  
          }
        });
      }  
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

  paypalConfig = {
    env: 'sandbox',
    client: {
      sandbox: 'AXBc2G7PXzN0XzwWDLTbb7tzCwR4yN_UgGqIbRXhRYV130N5ncX3YY3BiKAc29Otde-7Hhwf0Ch5Xa_8',
    },
    commit: true,
    payment: (data, actions) => {
      return actions.payment.create({
        payment: {
          transactions: [
            { amount: { total: this.price, currency: 'USD' } }
          ]
        }
      });
    },
    onAuthorize: (data, actions) => {
      return actions.payment.execute().then((payment) => {
        alert(payment);
        this.fintCart();
      })
    }
  };

  ngAfterViewChecked(): void {
    if (!this.addScript) {
      this.addPaypalScript().then(() => {
        paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn');
        this.paypalLoad = false;
      })
    }
  }
  
  addPaypalScript() {
    this.addScript = true;
    return new Promise((resolve, reject) => {
      let scripttagElement = document.createElement('script');    
      scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
      scripttagElement.onload = resolve;
      document.body.appendChild(scripttagElement);
    })
  }
}
