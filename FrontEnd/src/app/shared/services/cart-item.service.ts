import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CartItem } from '../models/cartItem';
import { CartId } from '../models/cartId';
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
    return this.http.get<CartItem[]>(this.cartItemUrl + 'getCart/' + finteeId);
  }

  getAllCartItems(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(this.cartItemUrl + 'all');
  }

  getCartPrice(finteeId: number): Observable<number> {
    return this.http.get<number>(this.cartItemUrl + 'price/' + finteeId);
  }

  getCartCount(finteeId: number):  Observable<number> {
    return this.http.get<number>(this.cartItemUrl + 'count/' + finteeId);
  }

  addToCart(item: CartItem): Observable<CartItem> {
    return this.http.post<CartItem>(`${this.cartItemUrl}add`, item, {responseType:'text' as 'json'});
  }

  removeFromCart(id: CartId): Observable<CartItem> {
    return this.http.post<CartItem>(`${this.cartItemUrl}remove`, id, {responseType:'text' as 'json'});
  }
}
