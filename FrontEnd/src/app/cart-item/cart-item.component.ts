import { Component, OnInit, Input } from '@angular/core';
import { CartItemService } from '../shared/services/cart-item.service';
import { ItemService } from '../shared/services/item.service';
import { UserService } from '../shared/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from '../shared/models/cartItem';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem : CartItem;
  @Input() cart: CartComponent;
  itemId: number;
  seller: String;
  itemPic: String;
  title: String;
  startDate: String;
  endDate: String;
  price: number;
  isDestroyed: boolean;

  constructor(private cartItemService: CartItemService, private itemService: ItemService, private userService: UserService, private route: ActivatedRoute) { }


  ngOnInit() {
    this.startDate = this.cartItem.startDate;
    this.endDate = this.cartItem.endDate;
    this.price = this.cartItem.price;  
    this.isDestroyed = true;

    this.itemId = this.cartItem.id.itemId;
    this.itemService.getItem(this.cartItem.id.itemId).subscribe(item => {
      this.itemPic = "../../assets/" + item.picture;
      this.title = item.name;
      this.userService.getUser(item.finterId).subscribe(seller => this.seller = seller.name);
    });
  }

  remove() {
    this.cartItemService.removeFromCart(this.cartItem.id).subscribe(response => {
      alert(response)
      this.isDestroyed = false;
      this.cart.ngOnInit();
    });
  }
}
