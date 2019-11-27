import { Component, OnInit } from '@angular/core';
import { ItemService } from '../shared/services/item.service';
import { UserService } from '../shared/services/user.service';
import { ItemReviewService } from '../shared/services/item-review.service';
import { Review } from '../shared/models/review';
import { ActivatedRoute } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Transaction } from '../shared/models/transaction';
import { TransactionService } from '../shared/services/transaction.service';
import { CartItemService } from '../shared/services/cart-item.service';
import { CartItem } from '../shared/models/cartItem';
import { CartId } from '../shared/models/cartId';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  rating: number;
  sellerName: string;
  sellerId: number;
  name: string;
  fintCount: number;
  price: number;
  image: string;
  location: string;
  itemReviewCount: number;
  reviews: Review[];
  itemId: number;
  userId: number;

  displayMonths = 2;
  navigation = 'select';
  showWeekNumbers = false;
  outsideDays = 'visible';

  model: NgbDateStruct;
  date: {year: number, month: number, day: number};

  constructor(private cookieService: CookieService, private cartItemService: CartItemService, private itemService: ItemService, private userService: UserService, private itemReviewService: ItemReviewService, private route: ActivatedRoute, private transactionService: TransactionService) { }

  ngOnInit() {
    this.userId = parseInt(this.cookieService.get('currentUserId'));
    this.itemId = +this.route.snapshot.paramMap.get('id');
    this.itemService.getItem(this.itemId).subscribe(item => {
      this.name = item.name;
      this.fintCount = item.fintCount;
      this.price = item.price;
      this.location = item.location;
      this.sellerId = item.finterId;
      this.image = "../../assets/" + item.picture;
      this.userService.getUser(item.finterId).subscribe(seller => this.sellerName = seller.name);
    });
    this.itemReviewService.getItemRating(this.itemId).subscribe(rating => this.rating = rating);
    this.itemReviewService.getReviewCount(this.itemId).subscribe(itemReviewCount => this.itemReviewCount = itemReviewCount);
    this.itemReviewService.getItemReviews(this.itemId).subscribe(reviews => this.reviews = reviews);
  }

  fint() {
    let date = this.model.month + "-" + this.model.day + "-" + this.model.year;
    let transaction = new Transaction(this.itemId, this.userId, date);
    this.transactionService.fint(transaction).subscribe(response => alert(response));
  }

  addToCart() {
    let date = this.model.month + "-" + this.model.day + "-" + this.model.year;

    this.userService.getUser(parseInt(this.cookieService.get('currentUserId'))).subscribe(user => {
      let cartItem = new CartItem(new CartId(this.itemId, user.userId), date, date, 0);
      this.cartItemService.addToCart(cartItem).subscribe(response => {
        alert(response);
      });
    });
  }

}
