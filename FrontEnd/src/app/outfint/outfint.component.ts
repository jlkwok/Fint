import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserService } from '../shared/services/user.service';
import { Item } from '../shared/models/item';
import { ItemService } from '../shared/services/item.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-outfint',
  templateUrl: './outfint.component.html',
  styleUrls: ['./outfint.component.css']
})
export class OutfintComponent implements OnInit {
  title = new FormControl('');
  price = new FormControl('');
  picture: string;
  finterId: number;

  constructor(private cookieService: CookieService, private userService: UserService, private itemService: ItemService) { }

  ngOnInit() {
    this.finterId = parseInt(this.cookieService.get('currentUserId'));
  }

  onFileSelected(event) {
    this.picture = event.target.files[0].name;
  }

  outfint(title: string, price: number) {
    title = title.trim();
    if (!title || !price) {
      alert("Please fill all fields");
      return;
    }
    this.userService.getUser(this.finterId).subscribe(user => {
      let item = new Item(title, price, this.picture, 0, true, user.location, this.finterId);
      this.itemService.postItem(item).subscribe(response => alert(response));
    });
  }
}
