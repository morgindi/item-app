import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from 'src/app/models/classes';
import {Observable} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl: string = 'http://localhost:8080/api/items/';

  constructor(private http: HttpClient) { }

  async getItems() : Promise<Item[]>{
    return await this.http
    .get<Item[]>(this.baseUrl)
    .toPromise();
  }

  async getItemDetails(id: number): Promise<Item> {
    return await this.http
    .get<Item>(this.baseUrl + id)
    .toPromise();
  }

  createItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.baseUrl, item);
  }

  updateItem(item: Item): Observable<Item> {
    return this.http.put<Item>(this.baseUrl + item.itemNumber, item);
  }

  deleteItem(id: number): Observable<Item> {
    return this.http.delete<Item>(this.baseUrl + id);
  }

}