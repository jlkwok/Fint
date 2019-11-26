import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserService } from '../shared/services/user.service';
import { AppComponent } from '../app.component';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../shared/models/item';
import { ItemService } from '../shared/services/item.service';
import { User } from '../shared/models/user';

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

  constructor(private userService: UserService, private route: ActivatedRoute, private itemService: ItemService) { }

  ngOnInit() {
    this.finterId = +this.route.snapshot.paramMap.get('userId');
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
    this.userService.getUser(+this.route.snapshot.paramMap.get('userId')).subscribe(user => {
      let item = new Item(title, price, this.picture, 0, true, user.location, this.finterId);
      this.itemService.postItem(item).subscribe(response => alert(response));
    });
  }
}
