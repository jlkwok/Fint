import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../shared/services/user.service';
import { FinterReviewService } from '../shared/services/finter-review.service';
import { Item } from '../shared/models/item';
import { TransactionService } from '../shared/services/transaction.service';
import { ItemService } from '../shared/services/item.service';

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
  //currentTransactions: Item[];
  // need outFints, reviews

  constructor(private route: ActivatedRoute, private userService: UserService, private finterReviewService: FinterReviewService, private transactionService: TransactionService, private itemService: ItemService) { }

  ngOnInit() {
    this.userId = +this.route.snapshot.paramMap.get('userId');
    this.userService.getUser(this.userId).subscribe(user => {
      this.name = user.name;
      this.location = user.location;
    });   
    this.finterReviewService.getFinterRating(this.userId).subscribe(rating => this.avgRating = rating);
    this.finterReviewService.getReviewCount(this.userId).subscribe(reviewCount => this.totalNumReviews = reviewCount);
    this.transactionService.getPastFints(this.userId).subscribe(fints => this.pastFints = fints);
    this.itemService.getUserItems(this.userId).subscribe(outfints => this.outfints = outfints);
    this.profilePic = "../../assets/avatar.png";
  }

}
