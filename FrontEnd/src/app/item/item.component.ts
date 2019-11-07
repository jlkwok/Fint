import { Component, OnInit } from '@angular/core';
import { ItemService } from '../shared/services/item.service';
import { Item } from '../shared/models/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  currentRate = 3.45;
  seller: String;
  name: String;
  fintCount: number;
  price: number;
  itemImages: String[];
  location: String;
  // need reviews
  item: Item;

  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemImages = ["../../assets/placeholder.png", "../../assets/avatar.png"];
    this.itemService.getItem(1).subscribe(item => {
      this.item = item as Item;
      this.name = this.item.name;
      this.fintCount = this.item.fintCount;
      this.price = this.item.price;
      this.location = this.item.location;
    });
  }

}
