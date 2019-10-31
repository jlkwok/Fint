import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  name: String;
  location: String;
  joinDate: String;
  avgRating: number;
  totalNumReviews: number;
  profilePic: String;
  // need pastFints, outFints, reviews

  constructor() { }

  ngOnInit() {
    this.name = "Jessica Kwok";
    this.location = "Cleveland, OH";
    this.joinDate = "October 31, 2019";
    this.avgRating = 3.7;
    this.totalNumReviews = 58;
    this.profilePic = "../../assets/avatar.png";
  }

}
