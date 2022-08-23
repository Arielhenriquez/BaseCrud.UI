import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Supermarkets } from '../models/supermarkets';

@Injectable({
  providedIn: 'root'
})
export class SuperMarketService {
  private url = 'SuperMarket';

  constructor(private http: HttpClient) { }

  public getSuperMarkets(): Observable<Supermarkets[]> {
    return this.http.get<Supermarkets[]>(`${environment.baseApi}/${this.url}/Get`)
  }
  public createSuperMarkets(supermarket: Supermarkets): Observable<Supermarkets[]> {
    return this.http.post<Supermarkets[]>(
      `${environment.baseApi}/${this.url}/Post`,
      supermarket
    );
  }

  public updateSuperMarkets(supermarket: Supermarkets): Observable<Supermarkets[]> {
    return this.http.put<Supermarkets[]>(
      `${environment.baseApi}/${this.url}Put?id=${supermarket.id}`,
      supermarket
    );
  }


  public deleteSupermarket(supermarket: Supermarkets): Observable<Supermarkets[]> {
    return this.http.delete<Supermarkets[]>(
      `${environment.baseApi}/${this.url}Delete?id=${supermarket.id}`
    );
  }
}
