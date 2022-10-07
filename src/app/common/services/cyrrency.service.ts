import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Item } from '../interfaces/Item';
import { Part } from '../interfaces/part';
import {Currency} from "../interfaces/currency";
import EndpointPrivat from "../state/endpointPrivat";
import EndpointPublicApiCurrency from "../state/endpointPublicApiCurrency";

@Injectable({
  providedIn: 'root'
})
export class CyrrencyService {
endpoint=EndpointPrivat
item:Item[]=[]
endpointPublicCurrency=EndpointPublicApiCurrency



  constructor(private http:HttpClient) { }
  getcyrrency():Observable<Item[]>{
     return this.http.get<Item[]>(this.endpoint)
  }
  getCurrency(country:string):Observable<Currency>{
    let emdpointMoney=this.endpointPublicCurrency+country
    return this.http.get<Currency>(emdpointMoney)
  }


  getpart():Observable<Part[]>{
    return this.http.get<Part[]>(this.endpoint)
 }
}
