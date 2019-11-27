import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../shared/models/item';
import { UserService } from '../shared/services/user.service';
import { ItemReviewService } from '../shared/services/item-review.service';
import { ItemService } from '../shared/services/item.service';
import { ReviewIds } from '../shared/models/reviewIds';
import { Review } from '../shared/models/review';
import { FormControl } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-past-fint-card',
  templateUrl: './past-fint-card.component.html',
  styleUrls: ['./past-fint-card.component.css']
})
export class PastFintCardComponent implements OnInit {
  url = '';
  @Input() item: Item;
  @Input() userId: number;
  name: string;
  seller: string;
  avgRating: number;
  numReviews: number;
  price: number;
  picture: string;
  revTextArea = new FormControl('');

  constructor(private cookieService: CookieService, private userService: UserService, private itemReviewService: ItemReviewService, private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getItem(this.item.itemId).subscribe(item => {
      this.name = item.name;
      this.price = item.price;
      this.picture = "../../assets/" + item.picture;
      this.userService.getUser(item.finterId).subscribe(user => this.seller = user.name);
    });
    this.itemReviewService.getItemRating(this.item.itemId).subscribe(rating => this.avgRating = rating);
    this.itemReviewService.getReviewCount(this.item.itemId).subscribe(numReviews => this.numReviews = numReviews);
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = () => { // called once readAsDataURL is completed
        this.url = reader.result.toString();
      }
    }
  }

  post(description:string, rating: number) {
    description = description.trim();
    if (!description || !rating) {
      alert("Please fill all fields");
      return;
    }
    this.userService.getUser(parseInt(this.cookieService.get('currentUserId'))).subscribe(user => {
      let review = new Review(new ReviewIds(user.userId, this.item.itemId), description, rating);
      this.itemReviewService.postReview(review).subscribe(response => {
        alert(response);
        this.itemReviewService.getReviewCount(this.item.itemId).subscribe(reviewCount => this.numReviews = reviewCount);
        this.itemReviewService.getItemRating(this.item.itemId).subscribe(rating => this.avgRating = rating);
      });
    });
  }

}
