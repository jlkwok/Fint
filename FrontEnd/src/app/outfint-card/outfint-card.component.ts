import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../shared/models/item';
import { ItemReviewService } from '../shared/services/item-review.service';

@Component({
  selector: 'app-outfint-card',
  templateUrl: './outfint-card.component.html',
  styleUrls: ['./outfint-card.component.css']
})
export class OutfintCardComponent implements OnInit {
  @Input() item: Item;
  rating: number;
  name: string;
  price: number;
  picture: string;
  itemReviewCount: number;

  constructor(private itemReviewService: ItemReviewService) { }

  ngOnInit() {
    this.picture = "../../assets/" + this.item.picture;
    this.name = this.item.name;
    this.price = this.item.price;
    this.itemReviewService.getItemRating(this.item.itemId).subscribe(rating => this.rating = rating);
    this.itemReviewService.getReviewCount(this.item.itemId).subscribe(itemReviewCount => this.itemReviewCount = itemReviewCount);
  }

}
