import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { Item } from '../shared/models/item';
import { TransactionService } from '../shared/services/transaction.service';
import { ItemService } from '../shared/services/item.service';
import { Review } from '../shared/models/review';
import { FinteeReviewService } from '../shared/services/fintee-review.service';
import { FormControl } from '@angular/forms';
import { ReviewIds } from '../shared/models/reviewIds';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  name: string;
  location: string;
  avgRating: number;
  totalNumReviews: number;
  profilePic: string;
  userId: number;
  pastFints: Item[];
  outfints: Item[];
  reviews: Review[];
  currentFints: Item[];
  currentOutfints: Item[];
  revTextArea = new FormControl('');
  profileUserId: number;
  currentUserProfile: boolean = false;

  constructor(private cookieService: CookieService, private route: ActivatedRoute, private userService: UserService, private finteeReviewService: FinteeReviewService, private transactionService: TransactionService, private itemService: ItemService) { }

  ngOnInit() {
    this.profileUserId = +this.route.snapshot.paramMap.get('userId');
    this.userId = parseInt(this.cookieService.get('currentUserId'));
    if (this.profileUserId === this.userId)
      this.currentUserProfile = true;
    this.userService.getUser(this.profileUserId).subscribe(user => {
      this.name = user.name;
      this.location = user.location;
    });   
    this.finteeReviewService.getFinteeRating(this.profileUserId).subscribe(rating => this.avgRating = rating);
    this.finteeReviewService.getReviewCount(this.profileUserId).subscribe(reviewCount => this.totalNumReviews = reviewCount);
    this.finteeReviewService.getFinteeReviews(this.profileUserId).subscribe(reviews => this.reviews = reviews);
    this.transactionService.getPastFints(this.profileUserId).subscribe(fints => this.pastFints = fints);
    this.transactionService.getCurrentFints(this.profileUserId).subscribe(currentFints => this.currentFints = currentFints);
    this.transactionService.getCurrentOutfints(this.profileUserId).subscribe(currentOutfints => this.currentOutfints = currentOutfints);
    this.itemService.getUserItems(this.profileUserId).subscribe(outfints => this.outfints = outfints);
    this.profilePic = "../../assets/photos/user"+this.userId;
  }

  post(description:string, rating: number) {
    description = description.trim();
    if (!description || !rating) {
      alert("Please fill all fields");
      return;
    }
    let review = new Review(new ReviewIds(this.userId, this.profileUserId), description, rating);
    this.finteeReviewService.postReview(review).subscribe(response => {
      alert(response);
      this.finteeReviewService.getFinteeReviews(this.profileUserId).subscribe(reviews => this.reviews = reviews);
      this.finteeReviewService.getReviewCount(this.profileUserId).subscribe(reviewCount => this.totalNumReviews = reviewCount);
      this.finteeReviewService.getFinteeRating(this.profileUserId).subscribe(rating => this.avgRating = rating);
    });
  }
}
