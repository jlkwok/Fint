import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserService } from './shared/services/user.service';
import { User } from './shared/models/user';
import { Router } from '@angular/router';
import { TitleCasePipe } from '@angular/common';
import { Item } from './shared/models/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'Fint';
  user: User;
  userId: number;
  userName: string;
  loggedIn: boolean;
  items: Item[];

  logInEmail = new FormControl('');
  logInPassword = new FormControl('');
  firstName = new FormControl('');
  lastName = new FormControl('');
  city = new FormControl('');
  state = new FormControl('');
  signUpEmail = new FormControl('');
  signUpPassword = new FormControl('');
  searchQuery = new FormControl('');

  constructor(private elementRef: ElementRef, private userService: UserService, private router: Router, private titleCasePipe: TitleCasePipe) {
  }

  ngOnInit() {    
  }

  ngAfterViewInit(): void {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#f4f4f8';
  }

  logIn(email: string, password: string): void {
    email = email.trim();
    password = password.trim();
    if (!email || !password) { return; }
    this.userService.logInUser(email, password).subscribe(user => {
      this.userService.setCurrentUserId(user.userId);
      this.userId = this.userService.currentUserId;
      this.userName = user.name;
      this.router.navigate([`/${this.userId}/home`]);
    });
  }

  signUp(username: string, firstName: string, lastName: string, password: string, city: string, state: string): void {
    username = username.trim();
    firstName = firstName.trim();
    lastName = lastName.trim();
    password = password.trim();
    city = city.trim();
    if (!username || !firstName || !lastName || !password || !city || !state) {
      alert("Please fill all fields");
      return;
    }
    let name = this.titleCasePipe.transform(firstName) + " " + this.titleCasePipe.transform(lastName);
    let location = this.titleCasePipe.transform(city) + ", " + state.toUpperCase();
    let user = new User(username, name, password, location)
    this.userService.signUpUser(user).subscribe(response => alert(response));
    this.firstName.reset();
    this.lastName.reset();
    this.city.reset();
    this.state.reset();
    this.signUpEmail.reset();
    this.signUpPassword.reset();
  }

  getItemsByQuery(query: string): void {
    query = query.trim();
    this.router.navigate([`/${this.user.userId}/home/${query}`]);
  }
}
