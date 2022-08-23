import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ShoppingList } from '../models/ShoppingList';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  private url = 'ShoppingList/';
  constructor(private http: HttpClient) { }

  public getShoppingList(): Observable<ShoppingList[]> {
    return this.http.get<ShoppingList[]>(`${environment.baseApi}/${this.url}Get`);
  }

  public updateShoppingList(shoppingList: ShoppingList): Observable<ShoppingList[]> {
    return this.http.put<ShoppingList[]>(
      `${environment.baseApi}/${this.url}Put?id=${shoppingList.id}`,
      shoppingList
    );
  }

  public createShoppingList(shoppingList: ShoppingList): Observable<ShoppingList[]> {
    return this.http.post<ShoppingList[]>(
      `${environment.baseApi}/${this.url}Post`,
      shoppingList
    );
  }

  public deleteShoppingList(shoppingList: ShoppingList): Observable<ShoppingList[]> {
    return this.http.delete<ShoppingList[]>(
      `${environment.baseApi}/${this.url}Delete?id=${shoppingList.id}`
    );
  }
}
