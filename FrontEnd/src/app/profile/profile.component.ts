import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../shared/services/user.service';
import { Item } from '../shared/models/item';
import { TransactionService } from '../shared/services/transaction.service';
import { ItemService } from '../shared/services/item.service';
import { Review } from '../shared/models/review';
import { FinteeReviewService } from '../shared/services/fintee-review.service';
import { FormControl } from '@angular/forms';
import { ReviewIds } from '../shared/models/reviewIds';

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
  //currentTransactions: Item[];
  // reviews

  constructor(private route: ActivatedRoute, private userService: UserService, private finteeReviewService: FinteeReviewService, private transactionService: TransactionService, private itemService: ItemService) { }

  ngOnInit() {
    this.userId = +this.route.snapshot.paramMap.get('userId');
    this.userService.getUser(this.userId).subscribe(user => {
      this.name = user.name;
      this.location = user.location;
    });   
    this.finteeReviewService.getFinteeRating(this.userId).subscribe(rating => this.avgRating = rating);
    this.finteeReviewService.getReviewCount(this.userId).subscribe(reviewCount => this.totalNumReviews = reviewCount);
    this.finteeReviewService.getFinteeReviews(this.userId).subscribe(reviews => this.reviews = reviews);
    this.transactionService.getPastFints(this.userId).subscribe(fints => this.pastFints = fints);
    this.transactionService.getCurrentFints(this.userId).subscribe(currentFints => this.currentFints = currentFints);
    this.transactionService.getCurrentOutfints(this.userId).subscribe(currentOutfints => this.currentOutfints = currentOutfints);
    this.itemService.getUserItems(this.userId).subscribe(outfints => this.outfints = outfints);
    this.profilePic = "../../assets/avatar.png";
  }

  post(description:string, rating: number) {
    description = description.trim();
    if (!description || !rating) {
      alert("Please fill all fields");
      return;
    }
    this.userService.getUser(+this.route.snapshot.paramMap.get('userId')).subscribe(user => {
      let review = new Review(new ReviewIds(this.userId, user.userId), description, rating);
      this.finteeReviewService.postReview(review).subscribe(response => {
        alert(response);
        this.finteeReviewService.getFinteeReviews(this.userId).subscribe(reviews => this.reviews = reviews);
      });
    });
  }


}
