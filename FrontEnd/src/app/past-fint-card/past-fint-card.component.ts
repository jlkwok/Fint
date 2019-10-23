import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-past-fint-card',
  templateUrl: './past-fint-card.component.html',
  styleUrls: ['./past-fint-card.component.css']
})
export class PastFintCardComponent implements OnInit {
  url = '';

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
