import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Review } from '../models/review';

@Injectable({
  providedIn: 'root'
})
export class ItemReviewService {

  private itemReviewUrl = 'http://localhost:8080/itemreview/';
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getItemRating(id: number): Observable<number> {
    return this.http.get<number>(this.itemReviewUrl + "getItemRating?itemId=" + id);
  }

  getReviewCount(id: number): Observable<number> {
    return this.http.get<number>(this.itemReviewUrl + "getReviewCount?itemId=" + id);
  }

  getItemReviews(id: number): Observable<Review[]> {
    return this.http.get<Review[]>(this.itemReviewUrl + "getItemReviews?itemId=" + id);
  }
}