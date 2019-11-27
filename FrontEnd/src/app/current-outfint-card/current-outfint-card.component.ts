import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../shared/models/item';
import { UserService } from '../shared/services/user.service';
import { ItemReviewService } from '../shared/services/item-review.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionService } from '../shared/services/transaction.service';
import { ItemService } from '../shared/services/item.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-current-outfint-card',
  templateUrl: './current-outfint-card.component.html',
  styleUrls: ['./current-outfint-card.component.css']
})
export class CurrentOutfintCardComponent implements OnInit {
  @Input() item: Item;
  rating: number;
  finteeName: string;
  finteeId: number;
  name: string;
  price: number;
  itemImages: string[];
  itemReviewCount: number;
  image: string;
  userId: number;
  endDate: string;
  destroy: boolean = true;

  constructor(private cookieService: CookieService, private userService: UserService, private itemReviewService: ItemReviewService, private route: ActivatedRoute, private transactionService: TransactionService, private itemService: ItemService) { }

  ngOnInit() {
    this.userId = parseInt(this.cookieService.get('currentUserId'));
    this.itemService.getItem(this.item.itemId).subscribe(item => {
      this.image = "../../assets/" + item.picture;
      this.name = item.name;
      this.price = item.price;
    });
    this.itemReviewService.getItemRating(this.item.itemId).subscribe(rating => this.rating = rating);
    this.itemReviewService.getReviewCount(this.item.itemId).subscribe(itemReviewCount => this.itemReviewCount = itemReviewCount);
    this.transactionService.getTransaction(this.item.itemId).subscribe(transaction => {
      this.endDate = transaction.endDate;
      this.finteeId = transaction.finteeId;
      this.userService.getUser(transaction.finteeId).subscribe(fintee => this.finteeName = fintee.name);
    });
  }

  checkValue(event: any) {
    if (event == 'B') {
      this.transactionService.getTransaction(this.item.itemId).subscribe(transaction => {
        this.transactionService.return(transaction.tid).subscribe(response => alert(response));
        this.destroy = false;
      });
    }
  }
}
