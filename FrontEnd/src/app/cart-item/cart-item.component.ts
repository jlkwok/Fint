import { Component, OnInit, Input } from '@angular/core';
import { CartItemService } from '../shared/services/cart-item.service';
import { ItemService } from '../shared/services/item.service';
import { UserService } from '../shared/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from '../shared/models/cartItem';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem : CartItem;
  itemId: number;
  seller: String;
  itemPic: String;
  title: String;
  startDate: String;
  endDate: String;
  price: number;

  constructor(private itemService: ItemService, private userService: UserService, private route: ActivatedRoute) { }


  ngOnInit() {
    //this.itemImages = ["../../assets/placeholder.png", "../../assets/avatar.png"];
    alert("Cart-Item-Init:" + this.cartItem);
    this.startDate = this.cartItem.startDate;
    this.endDate = this.cartItem.endDate;
    this.price = this.cartItem.price;  

    this.itemId = this.cartItem.id.itemId;
    this.itemService.getItem(this.cartItem.id.itemId).subscribe(item => {
      this.itemPic = "../../assets/" + item.picture;
      this.title = item.name;
      this.userService.getUser(item.finterId).subscribe(seller => this.seller = seller.name);
    });
  }
}
