import { Component, OnInit } from '@angular/core';
import { ItemService } from '../shared/services/item.service';
import { Item } from '../shared/models/item';
import { UserService } from '../shared/services/user.service';
import { User } from '../shared/models/user';
import { ItemReviewService } from '../shared/services/item-review.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  rating: number;
  sellerName: String;
  name: String;
  fintCount: number;
  price: number;
  itemImages: String[];
  location: String;
  itemReviewCount: number;
  // need reviews

  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  constructor(private itemService: ItemService, private userService: UserService, private itemReviewService: ItemReviewService) { }

  ngOnInit() {
    this.itemImages = ["../../assets/placeholder.png", "../../assets/avatar.png"];
    this.itemService.getItem(1).subscribe(item => {
      this.name = item.name;
      this.fintCount = item.fintCount;
      this.price = item.price;
      this.location = item.location;
      this.userService.getUser(item.finterId).subscribe(seller => this.sellerName = seller.name);
    });
    this.itemReviewService.getItemRating(1).subscribe(rating => this.rating = rating);
    this.itemReviewService.getReviewCount(1).subscribe(itemReviewCount => this.itemReviewCount = itemReviewCount);
  }
}
