import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = 'http://localhost:8080/user/';
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(this.userUrl + "getUser?id=" + id);
  }

  signUpUser(username: string, name: string, password: string): Observable<User> {
    var user = {"username":username, "name":name, "password": password};
    return this.http.post<User>(this.userUrl + "create", JSON.stringify(user), this.httpOptions);
  }

  logInUser() {
    // waiting for backend
  }
}