import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-outfint',
  templateUrl: './outfint.component.html',
  styleUrls: ['./outfint.component.css']
})
export class OutfintComponent implements OnInit {
  url = '';
  location: String;

  constructor() { }

  ngOnInit() { }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = () => { // called once readAsDataURL is completed
        this.url = reader.result.toString();
      }
    }
  }
}
