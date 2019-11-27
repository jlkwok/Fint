import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { ItemReviewService } from '../shared/services/item-review.service';
import { Item } from '../shared/models/item';
import { ActivatedRoute } from '@angular/router';
import { TransactionService } from '../shared/services/transaction.service';
import { ItemService } from '../shared/services/item.service';

@Component({
  selector: 'app-current-fint-card',
  templateUrl: './current-fint-card.component.html',
  styleUrls: ['./current-fint-card.component.css']
})
export class CurrentFintCardComponent implements OnInit {
  @Input() item: Item;
  rating: number;
  sellerName: string;
  name: string;
  price: number;
  itemImages: string[];
  itemReviewCount: number;
  image: string;
  userId: number;
  endDate: string;

  constructor(private userService: UserService, private itemReviewService: ItemReviewService, private route: ActivatedRoute, private transactionService: TransactionService, private itemService: ItemService) { }

  ngOnInit() {
    this.userId = +this.route.snapshot.paramMap.get('userId');
    this.itemService.getItem(this.item.itemId).subscribe(item => {
      this.image = "../../assets/" + item.picture;
      this.name = item.name;
      this.price = item.price;
      this.userService.getUser(item.finterId).subscribe(seller => this.sellerName = seller.name);
    });
    this.itemReviewService.getItemRating(this.item.itemId).subscribe(rating => this.rating = rating);
    this.itemReviewService.getReviewCount(this.item.itemId).subscribe(itemReviewCount => this.itemReviewCount = itemReviewCount);
    this.transactionService.getTransaction(this.item.itemId).subscribe(transaction => this.endDate = transaction.endDate);
  }

}
