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
endpointCurrency='http://api.exchangeratesapi.io/v1/latest?access_key=4bc4d0a5feeea4299fe3390e300abd77'
item:Item[]=[]
PART:Part[]=[]

  money:any;

  constructor(private http:HttpClient) { }
  getcyrrency():Observable<Item[]>{
     return this.http.get<Item[]>(this.endpoint)
  }

  search(){
 return this.http.get(this.endpointCurrency)
  }
  getCurrency(country:string){
    let emdpointMoney='https://api.exchangerate-api.com/v4/latest/'+country
    return this.http.get(emdpointMoney)
  }
  getpart():Observable<Part[]>{
    return this.http.get<Part[]>(this.endpoint)
 }
}
