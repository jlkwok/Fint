import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  currentRate = 3.45;
  seller: String;
  title: String;
  totalNumFints: number;
  price: number;
  itemImages: String[];
  // need reviews

  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  constructor() { }

  ngOnInit() {
    this.seller = "Seller Name";
    this.title = "Item Title";
    this.totalNumFints = 3;
    this.price = 7.89;
    this.itemImages = ["../../assets/placeholder.png", "../../assets/avatar.png"];
  }

}
