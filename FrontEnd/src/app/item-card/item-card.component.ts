import { Component, OnInit } from '@angular/core';
import { ItemService } from '../shared/services/item.service';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {
  rating: number;
  sellerName: String;
  name: String;
  price: number;
  itemImages: String[];
  itemReviewCount: number;
  
  constructor(private itemService: ItemService, private userService: UserService) { }

  ngOnInit() {
    this.itemImages = ["../../assets/placeholder.png", "../../assets/avatar.png"];
    this.itemService.getItem(1).subscribe(item => {
      this.name = item.name;
      this.price = item.price;
      this.userService.getUser(item.finterId).subscribe(seller => this.sellerName = seller.name);
    });
  }

}
