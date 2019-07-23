import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../item';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  BASE_URL = `https://api.fashbash.co/api1`;

  constructor(private httpClient: HttpClient) { }

  getFeed(page: number): Observable<Item[]> {
    let params: HttpParams = new HttpParams();
    params = params.append('page', page.toString());

    return this.httpClient.get<Item[]>(`${this.BASE_URL}/feed`, { params });
  }

  getProductById(id: string) {
    return this.getFeed(0).pipe(
      map((items: Item[]) => {
        return items.find(x => x._id === id)
      })
    )
  }


}
