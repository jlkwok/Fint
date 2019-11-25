import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from './shared/services/user.service';
import { User } from './shared/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'Fint';  
  loggedIn: boolean = false;
  user: User;

  logInEmail = new FormControl('');
  logInPassword = new FormControl('');
  firstName = new FormControl('');
  lastName = new FormControl('');
  signUpEmail = new FormControl('');
  signUpPassword = new FormControl('');

  constructor(private elementRef: ElementRef, private userService: UserService, private router: Router) {

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
    /*this.router.navigate([`/home/${user.userId}`])*/
  }

  signUp(username: string, firstName: string, lastName: string, password: string): void {
    username = username.trim();
    firstName = firstName.trim();
    lastName = lastName.trim();
    password = password.trim();
    var name = firstName + " " + lastName;
    let user = new User (username, name, password)
    this.userService.signUpUser(user).subscribe(response => alert(response));
  }
}
