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
    return this.http.get<User>(`${this.userUrl}getUser?id=${id}`);
  }

  signUpUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.userUrl}create`, user, {responseType:'text' as 'json'});
  }

  logInUser(username: String, password: String): Observable<User> {
    return this.http.get<User>(`${this.userUrl}verifyUser?username=${username}&password=${password}`);
  }
}