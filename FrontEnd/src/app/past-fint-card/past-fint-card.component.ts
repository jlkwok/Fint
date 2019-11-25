import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../shared/models/item';
import { UserService } from '../shared/services/user.service';
import { ItemReviewService } from '../shared/services/item-review.service';

@Component({
  selector: 'app-past-fint-card',
  templateUrl: './past-fint-card.component.html',
  styleUrls: ['./past-fint-card.component.css']
})
export class PastFintCardComponent implements OnInit {
  url = '';
  @Input() item: Item;
  name: String;
  seller: String;
  avgRating: number;
  numReviews: number;
  price: number;

  constructor(private userService: UserService, private itemReviewService: ItemReviewService) { }

  ngOnInit() {
    this.name = this.item.name;
    this.userService.getUser(this.item.finterId).subscribe(user => this.seller = user.name);
    this.itemReviewService.getItemRating(this.item.itemId).subscribe(rating => this.avgRating = rating);
    this.itemReviewService.getReviewCount(this.item.itemId).subscribe(numReviews => this.numReviews = numReviews);
    this.price = this.item.price;
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
}
