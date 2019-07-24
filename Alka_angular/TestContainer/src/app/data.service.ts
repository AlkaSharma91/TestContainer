import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPOSTS } from './iposts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url="https://jsonplaceholder.typicode.com/posts"
  constructor(private http:HttpClient) { }


  getData():Observable<IPOSTS[]>{
    return this.http.get<IPOSTS[]>(this.url);
  }
}
