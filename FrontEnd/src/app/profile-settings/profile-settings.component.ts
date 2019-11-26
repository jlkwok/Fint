import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../shared/services/user.service';

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

  constructor(private route: ActivatedRoute, private userService: UserService) { }

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
}
