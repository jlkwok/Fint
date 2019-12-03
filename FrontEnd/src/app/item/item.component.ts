import { Component, OnInit } from '@angular/core';
import { ItemService } from '../shared/services/item.service';
import { UserService } from '../shared/services/user.service';
import { ItemReviewService } from '../shared/services/item-review.service';
import { Review } from '../shared/models/review';
import { ActivatedRoute } from '@angular/router';
import { NgbDateStruct, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { Transaction } from '../shared/models/transaction';
import { TransactionService } from '../shared/services/transaction.service';
import { CartItemService } from '../shared/services/cart-item.service';
import { CartItem } from '../shared/models/cartItem';
import { CartId } from '../shared/models/cartId';
import { CookieService } from 'ngx-cookie-service';
import { HttpResponseBase } from '@angular/common/http';

declare let paypal: any;

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
  tPrice:number;

  addScript: boolean = false;
  paypalLoad: boolean = true;

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
    let transaction = this.createTransaction();
    this.transactionService.fint(transaction).subscribe(response => alert(response));
  }

  createTransaction() {
    if (!this.model)
      alert("Please specify an end date");
    let date = this.model.month + "-" + this.model.day + "-" + this.model.year;
    let chosenDate: NgbDate = new NgbDate(this.model.year, this.model.month, this.model.day);
    let currentDateObject = new Date();
    let currentDate = new NgbDate(currentDateObject.getFullYear(), currentDateObject.getMonth() + 1, currentDateObject.getDate());
    if (chosenDate.before(currentDate)) {
      alert("Invalid End Date");
      return null;
    }
    return new Transaction(this.itemId, this.userId, date);
  }

  updatePrice() {
    let transaction = this.createTransaction();
    if(!transaction){
      return;
    }
    this.transactionService.getTransactionPrice(this.price, transaction.endDate).subscribe(response => {
      this.tPrice = response;
    });
  }

  addToCart() {
    if (!this.model)
      alert("Please specify an end date");
    let date = this.model.month + "-" + this.model.day + "-" + this.model.year;
    let chosenDate: NgbDate = new NgbDate(this.model.year, this.model.month, this.model.day);
    let currentDateObject = new Date();
    let currentDate = new NgbDate(currentDateObject.getFullYear(), currentDateObject.getMonth() + 1, currentDateObject.getDate());
    if (chosenDate.before(currentDate)) {
      alert("Invalid End Date");
      return;
    }
    this.userService.getUser(parseInt(this.cookieService.get('currentUserId'))).subscribe(user => {
      let cartItem = new CartItem(new CartId(this.itemId, user.userId), date, date, 0);
      this.cartItemService.addToCart(cartItem).subscribe(response => {
        alert(response);
      });
    });
  }

  paypalConfig = {
    env: 'sandbox',
    client: {
      sandbox: 'AXBc2G7PXzN0XzwWDLTbb7tzCwR4yN_UgGqIbRXhRYV130N5ncX3YY3BiKAc29Otde-7Hhwf0Ch5Xa_8',
    },
    commit: true,
    payment: (data, actions) => {
      return actions.payment.create({
        payment: {
          transactions: [
            { amount: { total: this.tPrice, currency: 'USD' } }
          ]
        }
      });    
    },
    onAuthorize: (data, actions) => {
      return actions.payment.execute().then((payment) => {
        this.fint();
      })
    }
  };

  ngAfterViewChecked(): void {
    if (!this.addScript) {
      this.addPaypalScript().then(() => {
        paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn');
        this.paypalLoad = false;
      })
    }
  }
  
  addPaypalScript() {
    this.addScript = true;
    return new Promise((resolve, reject) => {
      let scripttagElement = document.createElement('script');    
      scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
      scripttagElement.onload = resolve;
      document.body.appendChild(scripttagElement);
    })
  }


}
