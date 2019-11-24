import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'Fint';  
  loggedIn: boolean = true;
  
  logInForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private elementRef: ElementRef) {

  }
  
  ngAfterViewInit(): void {
      this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#f4f4f8';
  }

  logIn() {
    console.log(this.logInForm.get('email').value);
  }

  onSubmit() {
    alert(this.logInForm.value);
  }
}
