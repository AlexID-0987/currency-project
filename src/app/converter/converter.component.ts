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
  changetMoney: string = 'USD'
  changetMoneyTo: string = 'UAH'
  response: string = '1'
  responseNumber: number = 1
  itemjson: any = []
  responseTwo: string = '1'
  it:any

  itemInputValue:string=''
  itemInputValueTwo:string=''
  itemInputValueNumberTwo:number=0
  selectResponseOne:number=0
  multipleResponseOne:number=0
  multipleResponseTwo:number=0
  constructor(private serv: CyrrencyService) {
  }


  ngOnInit(): void {
    this.getapi()


  }

  changet(money: string) {
    this.changetMoney = money
    console.log(this.changetMoney)
  }

  changetTo(moneyTo: string) {
    this.changetMoneyTo = moneyTo
    console.log(this.changetMoneyTo)
  }


  getapi() {
    this.serv.getpart().subscribe((c) => console.warn(this.par = c))
  }



  multipleInputTwo(){
    this.responseNumber = Number(this.response)
    this.itemInputValueNumberTwo = Number(this.itemInputValue)
    return this.multipleResponseTwo= this.itemInputValueNumberTwo * this.responseNumber

  }
   multipleInputOne(){

     this.selectResponseOne=Number(this.responseTwo)
     this.itemInputValueNumberTwo=Number(this.itemInputValueTwo)
     return this.multipleResponseOne= this.selectResponseOne*this.itemInputValueNumberTwo
   }

reset(){
    return this.itemInputValue='' , this.itemInputValueTwo=''
}
  convertOne() {
    console.log(this.changetMoneyTo)
    this.serv.getCurrency(this.changetMoneyTo).subscribe(data => {
      this.itemjson = JSON.stringify(data);
      this.itemjson = JSON.parse(this.itemjson)
      console.log(this.itemjson)
      if (this.changetMoney == 'UAH') {
        this.responseTwo = this.itemjson.rates.UAH
      }
      if (this.changetMoney == 'USD') {
        this.responseTwo = this.itemjson.rates.USD
      }
      if (this.changetMoney == 'EUR') {
        this.responseTwo = this.itemjson.rates.EUR
      }
      if (this.changetMoney == 'ALL') {
        this.responseTwo = this.itemjson.rates.ALL
      }
      if (this.changetMoney == 'BRL') {
        this.responseTwo = this.itemjson.rates.ALL
      }
    })
    this.multipleInputOne()
  }


  convertTwo() {
    console.log(this.changetMoney)
    this.serv.getCurrency(this.changetMoney).subscribe(data => {
      this.itemjson = JSON.stringify(data);
      this.itemjson = JSON.parse(this.itemjson)
      console.log(this.itemjson)
      if (this.changetMoneyTo == 'UAH') {
        this.response = this.itemjson.rates.UAH
      }
      if (this.changetMoneyTo == 'USD') {
        this.response = this.itemjson.rates.USD
      }
      if (this.changetMoneyTo == 'EUR') {
        this.response = this.itemjson.rates.EUR
      }
      if (this.changetMoneyTo == 'ALL') {
        this.response = this.itemjson.rates.ALL
      }
      if (this.changetMoneyTo == 'BRL') {
        this.response = this.itemjson.rates.ALL
      }
    })
    this.multipleInputTwo()
  }


}
