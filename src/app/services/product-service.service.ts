import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Products } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private url = 'Products/';
  constructor(private http: HttpClient) { }

  public getProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(`${environment.baseApi}/${this.url}Get`);
  }

  public updateProduct(product: Products): Observable<Products[]> {
    return this.http.put<Products[]>(
      `${environment.baseApi}/${this.url}Put?id=${product.id}`,
      product
    );
  }

  public createProduct(product: Products): Observable<Products[]> {
    return this.http.post<Products[]>(
      `${environment.baseApi}/${this.url}Post`,
      product
    );
  }

  public deleteProduct(product: Products): Observable<Products[]> {
    return this.http.delete<Products[]>(
      `${environment.baseApi}/${this.url}Delete?id=${product.id}`
    );
  }
}
