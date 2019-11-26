import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserService } from './shared/services/user.service';
import { User } from './shared/models/user';
import { Router, ActivatedRoute } from '@angular/router';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'Fint';
  // temporary
  //user: User = new User("jlkwok", "Jessica Kwok", "JessicaPassword", "Cleveland, OH");
  user: User;
  userId: number;
  userName: string;
  loggedIn: boolean;

  logInEmail = new FormControl('');
  logInPassword = new FormControl('');
  firstName = new FormControl('');
  lastName = new FormControl('');
  city = new FormControl('');
  state = new FormControl('');
  signUpEmail = new FormControl('');
  signUpPassword = new FormControl('');

  constructor(private elementRef: ElementRef, private userService: UserService, private router: Router, private route: ActivatedRoute, private titleCasePipe: TitleCasePipe) {
  }

  ngOnInit() {    
    this.userId = +this.route.snapshot.paramMap.get('userId');
    this.userService.getUser(this.userId).subscribe(user => this.user = user);
  }

  ngAfterViewInit(): void {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#f4f4f8';
  }

  logIn(email: string, password: string): void {
    email = email.trim();
    password = password.trim();
    if (!email || !password) { return; }
    this.userService.logInUser(email, password).subscribe(user => {
      this.user = user;
      this.userId = user.userId;
      this.userName = user.name;
      this.router.navigate([`/home/${user.userId}`]);
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
    let name = firstName + " " + lastName;
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
}
