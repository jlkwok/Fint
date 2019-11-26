import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../models/item';
import { Transaction } from '../models/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private transactionUrl = 'http://localhost:8080/transaction/';
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getFints(id: number): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.transactionUrl}getAllFints?finteeId=${id}`);
  }

  getOutfints(id: number): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.transactionUrl}getAllOutFints?finterId=${id}`);
  }

  fint(transaction: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(`${this.transactionUrl}fint`, transaction, {responseType:'text' as 'json'});
  }
}
