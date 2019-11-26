import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  seller: string;
  itemPic: string;
  title: string;
  startDate: string;
  endDate: string;
  price: number;

  constructor() { }

  ngOnInit() {
    this.seller = "Jessica Kwok";
    this.itemPic = "../../assets/placeholder.png";
    this.title = "A nice portrait";
    this.startDate = "October 31, 2019";
    this.endDate = "November 4, 2019";
    this.price = 5.55;
  }

}
