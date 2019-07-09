import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SugestionsService {

  BASE_URL = `https://api.fashbash.co/api`;

  constructor(private httpClient: HttpClient) { }

  getSuggestions(term: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('term', term);

    return this.httpClient.get<any>(`${this.BASE_URL}/suggestions`, { params });
  }
}
