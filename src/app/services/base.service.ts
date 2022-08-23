import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Brands } from '../models/brands';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  private url = 'Brands/';
  constructor(private http: HttpClient) { }

  public getBrands(): Observable<Brands[]> {
    return this.http.get<Brands[]>(`${environment.baseApi}/${this.url}Get`);
  }

  public updateBrand(brand: Brands): Observable<Brands[]> {
    return this.http.put<Brands[]>(
      `${environment.baseApi}/${this.url}Put?id=${brand.id}`,
      brand
    );
  }

  public createBrand(brand: Brands): Observable<Brands[]> {
    return this.http.post<Brands[]>(
      `${environment.baseApi}/${this.url}Post`,
      brand
    );
  }

  public deleteBrand(brand: Brands): Observable<Brands[]> {
    return this.http.delete<Brands[]>(
      `${environment.baseApi}/${this.url}Delete?id=${brand.id}`
    );
  }
}
