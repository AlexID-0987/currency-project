import { convertActionBinding } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component, OnInit } from '@angular/core';
import { CyrrencyService } from 'src/cyrrency.service';
import { Part } from '../part';
import {HttpClient} from "@angular/common/http";
import {Currency} from "../currency";



@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})

export class ConverterComponent implements OnInit {

  par: Part[] = []
  currency_converter: any
  num: number = 1
  item: number = 0;
  cangetMoney: string = 'USD'
  cangetMoneyTo: string = 'UAH'
  response: string = '1'
  responseNumber: number = 1
  itemjson: any = []
  responseTwo: string = '1'
  responseNumberTwo: number = 1

  constructor(private serv: CyrrencyService) {
  }


  ngOnInit(): void {
    this.getapi()
    this.getapi_currency()

  }

  canget(money: string) {
    this.cangetMoney = money
    console.log(this.cangetMoney)
  }

  cangetTo(moneyTo: string) {
    this.cangetMoneyTo = moneyTo
    console.log(this.cangetMoneyTo)
  }


  getapi() {
    this.serv.getpart().subscribe((c) => console.warn(this.par = c))
  }

  getapi_currency() {
    this.serv.search().subscribe((data) => console.warn(this.currency_converter = data))
  }

  multiple() {
    this.responseNumber = Number(this.response)
    this.responseNumberTwo = Number(this.responseTwo)
    return this.responseNumberTwo * this.responseNumber

  }

reset(){
    return this.response=''
}


  convertTwo() {
    console.log(this.cangetMoney)
    this.serv.getCurrency(this.cangetMoney).subscribe(data => {
      this.itemjson = JSON.stringify(data);
      this.itemjson = JSON.parse(this.itemjson)
      console.log(this.itemjson)
      if (this.cangetMoneyTo == 'UAH') {
        this.response = this.itemjson.rates.UAH
      }
      if (this.cangetMoneyTo == 'USD') {
        this.response = this.itemjson.rates.USD
      }
      if (this.cangetMoneyTo == 'EUR') {
        this.response = this.itemjson.rates.EUR
      }

    })
  }


}
