import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from './shared/services/user.service';
import { User } from './shared/models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'Fint';  
  loggedIn: boolean = false;

  logInEmail = new FormControl('');
  logInPassword = new FormControl('');
  firstName = new FormControl('');
  lastName = new FormControl('');
  signUpEmail = new FormControl('');
  signUpPassword = new FormControl('');

  constructor(private elementRef: ElementRef, private userService: UserService) {

  }
  
  ngAfterViewInit(): void {
      this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#f4f4f8';
  }

  logIn(email: string, password: string): void {
    email = email.trim();
    password = password.trim();
    if (!email || !password) { return; }
    this.userService.logInUser();
    // waiting for backend
  }

  signUp(username: string, firstName: string, lastName: string, password: string): void {
    username = username.trim();
    firstName = firstName.trim();
    lastName = lastName.trim();
    password = password.trim();
    var name = firstName + " " + lastName;
    this.userService.signUpUser(username, name, password).subscribe();
  }
}
