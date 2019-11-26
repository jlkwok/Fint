import { Component, OnInit, Input } from '@angular/core';
import { ItemService } from '../shared/services/item.service';
import { UserService } from '../shared/services/user.service';
import { ItemReviewService } from '../shared/services/item-review.service';
import { Item } from '../shared/models/item';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {
  @Input() item: Item;
  rating: number;
  sellerName: string;
  name: string;
  price: number;
  itemImages: string[];
  itemReviewCount: number;
  image: string;

  constructor(private userService: UserService, private itemReviewService: ItemReviewService) { }

  ngOnInit() {
    this.image = "../../assets/" + this.item.picture;
    this.name = this.item.name;
    this.price = this.item.price;
    this.userService.getUser(this.item.finterId).subscribe(seller => this.sellerName = seller.name);
    this.itemReviewService.getItemRating(this.item.itemId).subscribe(rating => this.rating = rating);
    this.itemReviewService.getReviewCount(this.item.itemId).subscribe(itemReviewCount => this.itemReviewCount = itemReviewCount);
  }

}
