import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Item } from '../models/item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private feedUrl = 'http://localhost:8080/feed/';
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  sortAllItems(metric: string, isAscending: boolean): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.feedUrl}getFeedByQuerySorted?isAscending=${isAscending}&metric=${metric}`);
  }

  sortItemsByQuery(query: string, metric: string, isAscending: boolean): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.feedUrl}getFeedByQuerySorted?query=${query}&isAscending=${isAscending}&metric=${metric}`);
  }

  getItemsByQuery(query: string) {
    return this.http.get<Item[]>(`${this.feedUrl}getFeedByQuery?query=${query}`);
  }
}