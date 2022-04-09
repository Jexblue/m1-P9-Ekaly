import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = "https://ekalyback.herokuapp.com/";

  constructor(private http: HttpClient) { }

  get(table: string): Observable<any> {
    return this.http.get(this.url + table);
  }

  post(table: string, obj: object): Observable<any> {

    return this.http.post(this.url + table, obj );

  }

}
