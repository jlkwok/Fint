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

  getTransaction(id: number): Observable<Transaction> {
    return this.http.get<Transaction>(`${this.transactionUrl}getTransaction?itemId=${id}`);
  }

  getCurrentFints(id: number): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.transactionUrl}getCurrentFints?finteeId=${id}`);
  }

  getCurrentOutfints(id: number): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.transactionUrl}getCurrentOutFints?finterId=${id}`);
  }

  getPastFints(id: number): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.transactionUrl}getPastFints?finteeId=${id}`);
  }

  getOutfints(id: number): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.transactionUrl}getAllOutFints?finterId=${id}`);
  }

  fint(transaction: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(`${this.transactionUrl}fint`, transaction, {responseType:'text' as 'json'});
  }

  return(tId: number): Observable<Transaction> {
    return this.http.post<Transaction>(`${this.transactionUrl}return`, tId, {responseType:'text' as 'json'});
  }

  getTransactionPrice(price : number, endDate : string) : Observable<number> {
    return this.http.get<number>(`${this.transactionUrl}tPrice?price=${price}&endDate=${endDate}`);
  }
}
