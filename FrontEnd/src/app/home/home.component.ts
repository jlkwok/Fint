import { Component, OnInit } from '@angular/core';
import { Item } from '../shared/models/item';
import { ItemService } from '../shared/services/item.service';
import { HomeService } from '../shared/services/home.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: Item[];
  query: string;

  constructor(private itemService: ItemService, private homeService: HomeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.query = this.route.snapshot.paramMap.get('query');
    if (typeof this.query === "object") {
      this.itemService.getAllItems().subscribe(items => this.items = items);
    } else {   
      this.homeService.getItemsByQuery(this.query).subscribe(items => this.items = items);
    }
  }

  sort(metric : string, isAscending : boolean) {
    if (typeof this.query === "object") {
      this.homeService.sortAllItems(metric, isAscending).subscribe(items => this.items = items);
    } else {
      this.homeService.sortItemsByQuery(this.query, metric, isAscending).subscribe(items => this.items = items);
    }
  }
}
