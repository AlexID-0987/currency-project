import { Component, OnInit } from '@angular/core';
import { CyrrencyService } from 'src/cyrrency.service';
import { Part } from '../part';




@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})

export class ConverterComponent implements OnInit {

  par: Part[] = []
  num: number = 1
  item: number = 0;
  cangetMoney: string = 'USD'
  cangetMoneyTo: string = 'UAH'
  response: string = '1'
  responseNumber: number = 1
  itemjson: any = []
  responseTwo: string = '1'
  responseNumberTwo: number = 1
  it:any

  constructor(private serv: CyrrencyService) {
  }


  ngOnInit(): void {
    this.getapi()


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



  multiple() {
    this.responseNumber = Number(this.response)
    this.responseNumberTwo = Number(this.responseTwo)
    return this.responseNumberTwo * this.responseNumber

  }
  multipleTwo() {
    this.responseNumber = Number(this.response)
    this.responseNumberTwo = Number(this.responseTwo)
    return this.responseNumber*this.responseNumberTwo

  }

reset(){
    return this.response=''
}
  convertOne() {
    console.log(this.cangetMoneyTo)
    this.serv.getCurrency(this.cangetMoneyTo).subscribe(data => {
      this.itemjson = JSON.stringify(data);
      this.itemjson = JSON.parse(this.itemjson)
      console.log(this.itemjson)
      if (this.cangetMoney == 'UAH') {
        this.responseTwo = this.itemjson.rates.UAH
      }
      if (this.cangetMoney == 'USD') {
        this.responseTwo = this.itemjson.rates.USD
      }
      if (this.cangetMoney == 'EUR') {
        this.responseTwo = this.itemjson.rates.EUR
      }
      if (this.cangetMoney == 'ALL') {
        this.responseTwo = this.itemjson.rates.ALL
      }
    })
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
      if (this.cangetMoney == 'ALL') {
        this.responseTwo = this.itemjson.rates.ALL
      }
    })
  }


}
