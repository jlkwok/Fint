import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Review } from '../models/review';

@Injectable({
  providedIn: 'root'
})
export class FinteeReviewService {
  private finteeReviewUrl = 'http://localhost:8080/finteereview/';
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getFinteeRating(id: number): Observable<number> {
    return this.http.get<number>(`${this.finteeReviewUrl}getFinteeRating?finteeId=${id}`);
  }

  getReviewCount(id: number): Observable<number> {
    return this.http.get<number>(`${this.finteeReviewUrl}getReviewCount?finteeId=${id}`);
  }

  getFinteeReviews(id: number): Observable<Review[]> {
    return this.http.get<Review[]>(`${this.finteeReviewUrl}getFinteeReviews?finteeId=${id}`);
  }

  postReview(review: Review): Observable<Review> {
    return this.http.post<Review>(`${this.finteeReviewUrl}postFinteeReview`, review, {responseType:'text' as 'json'});
  }

}
