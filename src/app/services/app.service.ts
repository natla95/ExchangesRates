import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AppService {
  apiUrl = 'http://api.nbp.pl/api/exchangerates/tables/a/last/5';

  constructor(private http: HttpClient) { }

  getExchangeRates() {
    return this.http.get(this.apiUrl);
  }
}
