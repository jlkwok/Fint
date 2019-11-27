import { Component, OnInit } from '@angular/core';
import { Item } from '../shared/models/item';
import { ItemService } from '../shared/services/item.service';
import { HomeService } from '../shared/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: Item[];

  constructor(private itemService: ItemService, private homeService: HomeService) { }

  ngOnInit() {
    this.itemService.getAllItems().subscribe(items => this.items = items);
  }

  sort(metric : string, isAscending : boolean) {
    this.homeService.sortAllItems(metric, isAscending).subscribe(items => this.items = items);
  }

}
