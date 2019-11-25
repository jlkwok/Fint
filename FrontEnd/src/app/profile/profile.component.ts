import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../shared/models/user';
import { UserService } from '../shared/services/user.service';
import { FinterReviewService } from '../shared/services/finter-review.service';

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
  // need pastFints, outFints, reviews

  constructor(private route: ActivatedRoute, private userService: UserService, private finterReviewService: FinterReviewService) { }

  ngOnInit() {
    this.userId = +this.route.snapshot.paramMap.get('userId');
    this.userService.getUser(this.userId).subscribe(user => {
      this.name = user.name;
      this.location = user.location;
      this.finterReviewService.getFinterRating(user.userId).subscribe(rating => this.avgRating = rating);
      this.finterReviewService.getReviewCount(user.userId).subscribe(reviewCount => this.totalNumReviews = reviewCount);
    })
    this.profilePic = "../../assets/avatar.png";
  }

}
