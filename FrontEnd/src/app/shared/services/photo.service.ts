import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { IntString } from '../models/intstring'
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private photoUrl = 'http://localhost:8080/photoupload/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }
  updatePicture(photoFile: File, photoName: string) {
    if (typeof photoFile !== "undefined") {
        let formData: FormData = new FormData();
        formData.append('file', photoFile);
        return this.http.post<string>(`${this.photoUrl}upload?name=${photoName}`, formData, {responseType:'text' as 'json'});
    }
    return of("bad");
  }
}