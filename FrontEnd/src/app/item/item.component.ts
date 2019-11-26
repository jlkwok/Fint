import { Component, OnInit } from '@angular/core';
import { ItemService } from '../shared/services/item.service';
import { UserService } from '../shared/services/user.service';
import { ItemReviewService } from '../shared/services/item-review.service';
import { Review } from '../shared/models/review';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  rating: number;
  sellerName: string;
  sellerId: number;
  name: string;
  fintCount: number;
  price: number;
  itemImages: string[];
  location: string;
  itemReviewCount: number;
  reviews: Review[];

  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  constructor(private itemService: ItemService, private userService: UserService, private itemReviewService: ItemReviewService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    //this.itemImages = ["../../assets/placeholder.png", "../../assets/avatar.png"];
    this.itemService.getItem(id).subscribe(item => {
      this.name = item.name;
      this.fintCount = item.fintCount;
      this.price = item.price;
      this.location = item.location;
      this.sellerId = item.finterId;
      this.userService.getUser(item.finterId).subscribe(seller => this.sellerName = seller.name);
    });
    this.itemReviewService.getItemRating(id).subscribe(rating => this.rating = rating);
    this.itemReviewService.getReviewCount(id).subscribe(itemReviewCount => this.itemReviewCount = itemReviewCount);
    this.itemReviewService.getItemReviews(id).subscribe(reviews => this.reviews = reviews);
  }
}
