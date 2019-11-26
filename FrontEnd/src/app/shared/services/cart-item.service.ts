import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CartItem } from '../models/cartItem';
import { Item } from '../models/item'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartItemService {
  private cartItemUrl = 'http://localhost:8080/cart/';
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getFinteeCart(finteeId: number): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(this.cartItemUrl + '/getCart/' + finteeId);
  }

  getAllCartItems(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(this.cartItemUrl + 'all');
  }

  addToCart(item: CartItem): Observable<CartItem> {
    return this.http.post<CartItem>(`${this.cartItemUrl}add`, item, {responseType:'text' as 'json'});
  }
}
