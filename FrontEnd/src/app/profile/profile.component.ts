import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../shared/models/user';
import { UserService } from '../shared/services/user.service';
import { FinterReviewService } from '../shared/services/finter-review.service';
import { Item } from '../shared/models/item';
import { TransactionService } from '../shared/services/transaction.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  name: String;
  location: String;
  avgRating: number;
  totalNumReviews: number;
  profilePic: String;
  userId: number;
  pastFints: Item[];
  outFints: Item[];
  // need pastFints, outFints, reviews

  constructor(private route: ActivatedRoute, private userService: UserService, private finterReviewService: FinterReviewService, private transactionService: TransactionService) { }

  ngOnInit() {
    this.userId = +this.route.snapshot.paramMap.get('userId');
    this.userService.getUser(this.userId).subscribe(user => {
      this.name = user.name;
      this.location = user.location;
      this.finterReviewService.getFinterRating(user.userId).subscribe(rating => this.avgRating = rating);
      this.finterReviewService.getReviewCount(user.userId).subscribe(reviewCount => this.totalNumReviews = reviewCount);
      this.transactionService.getFints(user.userId).subscribe(fints => this.pastFints = fints);
      this.transactionService.getOutfints(user.userId).subscribe(outfints => this.outFints = outfints);
    })
    this.profilePic = "../../assets/avatar.png";
  }

}
