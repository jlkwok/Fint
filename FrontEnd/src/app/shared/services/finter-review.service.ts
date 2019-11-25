import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FinterReviewService {

  private finterReviewUrl = 'http://localhost:8080/finterreview/';
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getFinterRating(id: number): Observable<number> {
    return this.http.get<number>(`${this.finterReviewUrl}getFinterRating?finterId=${id}`);
  }

  getReviewCount(id: number): Observable<number> {
    return this.http.get<number>(`${this.finterReviewUrl}getReviewCount?finterId=${id}`);
  }
}
