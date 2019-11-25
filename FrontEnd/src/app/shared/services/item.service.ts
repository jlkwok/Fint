import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Item } from '../models/item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private itemUrl = 'http://localhost:8080/item/';
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getItem(id: number): Observable<Item> {
    return this.http.get<Item>(`${this.itemUrl}${id}`);
  }

  getAllItems(): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.itemUrl}all`);
  }

  postItem(item: Item): Observable<Item> {
    return this.http.post<Item>(`${this.itemUrl}post`, item, {responseType:'text' as 'json'});
  }
}