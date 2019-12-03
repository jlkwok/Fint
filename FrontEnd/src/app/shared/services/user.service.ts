import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { IntString } from '../models/intstring'
import { Observable } from 'rxjs';
import { of } from 'rxjs';

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

  logInUser(username: string, password: string): Observable<User> {
    return this.http.get<User>(`${this.userUrl}verifyUser?username=${username}&password=${password}`);
  }

  updateUserName(id: number, name: string) {
    if (name !== " ") {
      let is = new IntString(id, name);
      return this.http.post<string>(`${this.userUrl}setUserName`, is, {responseType:'text' as 'json'});
    }
    return of("bad");
  }
  updateUserLocation(id: number, location: string){
    if (location !== ", ") {
      let is = new IntString(id, location);
      return this.http.post<string>(`${this.userUrl}setUserLocation`, is, {responseType:'text' as 'json'});
    }
    return of("bad");
  }
}