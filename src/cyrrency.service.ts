import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from './app/Item';

@Injectable({
  providedIn: 'root'
})
export class CyrrencyService {
endpoint='https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5'
item:Item[]=[]
  constructor(private http:HttpClient) { }
  getcyrrency():Observable<Item[]>{
     return this.http.get<Item[]>(this.endpoint)
  }
}
