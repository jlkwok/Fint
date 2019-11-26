import { Component, OnInit, Input } from '@angular/core';
import { Review } from '../shared/models/review';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  @Input() review: Review;
  rating: number;
  profilePic: string;
  reviewer: string;
  postDate: Date;
  reviewContent: string;
  reviewerId: number;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.rating = this.review.rating;
    this.profilePic = "../../assets/avatar.png";
    this.reviewerId = this.review.id.reviewerId;
    this.userService.getUser(this.review.id.reviewerId).subscribe(reviewer => this.reviewer = reviewer.name);
    this.postDate = this.review.postDate;
    this.reviewContent = this.review.description;
  }

}
