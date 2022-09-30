import {Component, OnInit} from '@angular/core';
import {CyrrencyService} from 'src/cyrrency.service';
import {Part} from '../part';
import {Currency} from "../currency";


@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})

export class ConverterComponent implements OnInit {

  par: Part[] = []
  num: number = 1
  item: number = 0;
  key: string = ''
  itemResp: object = {
    [this.key]: Number
  }
  search: string = "USD"
  searchCurrency: string = "USD"
  searchCurrencyTwo: string = "USD"
  numberMultiply: number = 1
  numberMultiplyTwo: number = 1
  inputValueOne: number = 0
  inputValueTwo: number = 0
  responseOne: number = 0
  responseTwo: number = 0


  constructor(private serv: CyrrencyService) {
  }


  ngOnInit(): void {
    this.getapi()
    this.getapiTwo()
  }

  changet(money: string) {
    this.searchCurrency = money
    console.log(this.searchCurrency)
  }

  changetTo(moneyTo: string) {
    this.searchCurrencyTwo = moneyTo
    console.log(this.searchCurrencyTwo)
  }


  getapi() {
    this.serv.getpart().subscribe((c) => console.warn(this.par = c))
  }

  getapiTwo() {
    this.serv.getCurrency(this.search).subscribe((data) => console.log(this.itemResp = data.rates))
    console.log(this.itemResp)


  }

  clickButt() {
    const array = Object.entries(this.itemResp)
    let f = new Map(array)
    this.numberMultiply = f.get(this.searchCurrency)
    return console.log(this.numberMultiply)
  }

  clickButtTwo() {
    const arrayTwo = Object.entries(this.itemResp)
    let f = new Map(arrayTwo)
    this.numberMultiplyTwo = f.get(this.searchCurrencyTwo)
    return console.log(this.numberMultiplyTwo)
  }

  getAllCurrency(): string[] {
    return Object.keys(this.itemResp)
  }

  getAllCurrencyTwo(): string[] {
    return Object.keys(this.itemResp)
  }

  multipleFirstNumber() {
    return this.responseOne = this.inputValueTwo * this.numberMultiply

  }

  multipleSecondNumber() {
    return this.responseTwo = this.inputValueOne * this.numberMultiplyTwo

  }


}
