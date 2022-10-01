import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Item } from './app/Item';
import { Part } from './app/part';
import {Currency} from "./app/currency";

@Injectable({
  providedIn: 'root'
})
export class CyrrencyService {
endpoint='https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';
item:Item[]=[]




  constructor(private http:HttpClient) { }
  getcyrrency():Observable<Item[]>{
     return this.http.get<Item[]>(this.endpoint)
  }
  getCurrency(country:string):Observable<Currency>{
    let emdpointMoney='https://api.exchangerate-api.com/v4/latest/'+country
    return this.http.get<Currency>(emdpointMoney)
  }


  getpart():Observable<Part[]>{
    return this.http.get<Part[]>(this.endpoint)
 }
}
