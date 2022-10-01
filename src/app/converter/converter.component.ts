import {Component, OnInit} from '@angular/core';
import {CyrrencyService} from 'src/cyrrency.service';
import {Part} from '../part';


@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})

export class ConverterComponent implements OnInit {

  par: Part[] = []
  currencyMoneyOne: string = 'USD'
  currencyMoneyTwo: string = 'USD'
  key: string = ''
  itemResponse: object = {
    [this.key]: Number
  }
  currencyBase: string = 'USD'
  objectValueOne:number=0
  objectValueTwo:number=0
  constructor(private serv: CyrrencyService) {
  }


  ngOnInit(): void {
    this.getapi()
    this.getApiTwo()


  }

  changet(money: string) {
    this.currencyMoneyOne = money
    console.log(this.currencyMoneyOne)
  }

  changetTo(moneyTo: string) {
    this.currencyMoneyTwo = moneyTo
    console.log(this.currencyMoneyTwo)
  }

  getapi() {
    this.serv.getpart().subscribe((c) => console.warn(this.par = c))
  }

  getApiTwo() {
    this.serv.getCurrency(this.currencyBase).subscribe(data => console.log(this.itemResponse = data.rates))
  }
  addedToFirstKeyObject():string[]{
    return Object.keys(this.itemResponse)
  }
  addedToSecondKeyObject():string[]{
    return Object.keys(this.itemResponse)
  }
  addedFirstValueObject(){
    const arrayValue=Object.entries(this.itemResponse)
    let objectMap=new Map(arrayValue)
    this.objectValueOne=objectMap.get(this.currencyMoneyOne)
    return console.log(this.objectValueOne)
  }

  addedSecondValueObject(){
    let arrayValue=Object.entries(this.itemResponse)
    let objectMap=new Map(arrayValue)
    this.objectValueTwo=objectMap.get(this.currencyMoneyTwo)
    return console.log(this.objectValueTwo)
  }
  reset() {

  }


}
