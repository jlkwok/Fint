import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../shared/services/user.service';
import { FormControl } from '@angular/forms';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.css']
})
export class ProfileSettingsComponent implements OnInit {
  url = '';
  profilePic: string;
  name: string;
  location: string;
  userId: number;

  firstName = new FormControl('');
  lastName = new FormControl('');
  city = new FormControl('');
  state = new FormControl('');

  constructor(private route: ActivatedRoute, private userService: UserService, private titleCasePipe: TitleCasePipe, private router: Router) { }

  ngOnInit() {
    this.userId = +this.route.snapshot.paramMap.get('userId');
    this.profilePic = "../../assets/avatar.png";
    this.userService.getUser(this.userId).subscribe(user => {
      this.name = user.name;
      this.location = user.location;
    });
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = () => { // called once readAsDataURL is completed
        this.url = reader.result.toString();
      }
    }
  }

  updateUser(firstName: string, lastName: string, city: string, state: string) {
    if (!firstName && !lastName && !city && !state) {
      alert("You are not updating anything!");
    } else if ((firstName && !lastName) || (!firstName && lastName)){
      alert("You must update both first and last names");
    } else if ((city && !state) || (!city && state)) {
      alert("You must update both city and state");
    }
    firstName = firstName.trim();
    lastName = lastName.trim();
    city = city.trim();
    state = state.trim();
    let name = this.titleCasePipe.transform(firstName) + " " + this.titleCasePipe.transform(lastName);
    let location = this.titleCasePipe.transform(city) + ", " + state.toUpperCase();
    this.userService.updateUserName(this.userId, name).subscribe(response => {
      this.userService.updateUserLocation(this.userId, location).subscribe(response => {
        this.router.navigate([`/${this.userId}/profile`]);
      });
    });
  }
}
