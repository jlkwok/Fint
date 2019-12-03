import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { UserService } from '../shared/services/user.service';
import { Item } from '../shared/models/item';
import { ItemService } from '../shared/services/item.service';
import { CookieService } from 'ngx-cookie-service';
import { PhotoService } from '../shared/services/photo.service';

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
  selectedFile: File;

  constructor(private cookieService: CookieService, private userService: UserService, private photoService: PhotoService, private itemService: ItemService, private router: Router) { }

  ngOnInit() {
    this.finterId = parseInt(this.cookieService.get('currentUserId'));
  }

  onSelectFile(event) {
    this.selectedFile = event.target.files[0];
  }

  outfint(title: string, price: number) {
    title = title.trim();
    if (!title || !price) {
      alert("Please fill all fields");
      return;
    }
    this.userService.getUser(this.finterId).subscribe(user => {
      let item = new Item(title, price, this.picture, 0, true, user.location, this.finterId);
      this.itemService.postItem(item).subscribe(itemId => {
        alert("New Item Posted");
        this.photoService.updatePicture(this.selectedFile, "item"+itemId).subscribe(response => {
          this.itemService.updateItemPic(itemId, "photos/item"+itemId).subscribe(response => {
            this.router.navigate([`/${this.finterId}/profile`]);
          });
        });
      });
    });
  }
}
