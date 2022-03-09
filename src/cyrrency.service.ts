import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Item } from './app/Item';
import { Part } from './app/part';

@Injectable({
  providedIn: 'root'
})
export class CyrrencyService {
endpoint='https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

item:Item[]=[]
PART:Part[]=[]

  constructor(private http:HttpClient) { }
  getcyrrency():Observable<Item[]>{
     return this.http.get<Item[]>(this.endpoint)
  }

  getpart():Observable<Part[]>{
    return this.http.get<Part[]>(this.endpoint)
 }
}
