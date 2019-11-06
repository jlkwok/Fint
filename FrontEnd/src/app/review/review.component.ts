import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  rate: number;
  profilePic: String;
  name: String;
  postDate: String;
  reviewContent: String;

  constructor() { }

  ngOnInit() {
    this.rate = 3;
    this.profilePic = "../../assets/avatar.png";
    this.name = "Jessica Kwok";
    this.postDate = "October 31, 2019";
    this.reviewContent = "This item is cool!";
  }

}
