import { Component, OnInit } from '@angular/core';
import InitializationReactiveFormForCurrency
  from "../common/reactiveFormForProject/initializationReactiveFormForCurrency";
import InitializationSecondReactiveFormForCurrency
  from "../common/reactiveFormForProject/initializationSecondReactiveFormForCurrency";
import InitializationClassProjectState from "../common/state/initializationClassProjectState";
import InitializationClassInputState from "../common/state/initializationClassInputState";
import key from "../common/state/objectApi";
import {CyrrencyService} from "../common/services/cyrrency.service";



@Component({
  selector: 'app-converter-api-currency',
  templateUrl: './converter-api-currency.component.html',
  styleUrls: ['./converter-api-currency.component.css']
})
export class ConverterApiCurrencyComponent implements OnInit {
  formGroupInputOne=InitializationReactiveFormForCurrency
  formGroupInputSecond=InitializationSecondReactiveFormForCurrency
  exportValue=InitializationClassProjectState
  inputValueForm=InitializationClassInputState
  currencyMoneyOne=this.exportValue.sendToStringFirstSelect()
  currencyMoneyTwo=this.exportValue.sendToStringSecondSelect()
  currencyBase=this.exportValue.sendToStringBaseCurrency()
  keyObject=key
  itemResponse: object = {
    [this.keyObject]: Number
  }
  objectValueOne=this.inputValueForm.sendNumberInput()
  objectValueTwo=this.inputValueForm.sendNumberInput()
  inputNumberValueOne=this.inputValueForm.sendNumberInput()
  inputNumberValueTwo=this.inputValueForm.sendNumberInput()
  responseFirstInput=this.inputValueForm.sendNumberInput()
  responseSecondInput=this.inputValueForm.sendNumberInput()
  constructor(private serv: CyrrencyService) {
  }

  ngOnInit(): void {
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
  getApiTwo() {
    this.serv.getCurrency(this.currencyBase).subscribe(data => console.log(this.itemResponse = data.rates))
    this.getValueFirstInput()
    this.getValueSecondInput()
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
  multipleFirstTwoNumbers(){
    return this.responseFirstInput=this.objectValueOne*this.inputNumberValueTwo
  }
  multipleSecondTwoNumbers() {
    return this.responseSecondInput = this.objectValueTwo * this.inputNumberValueOne
  }
  reset() {
    this.inputNumberValueOne=this.inputValueForm.sendNumberInput()
    this.inputNumberValueTwo=this.inputValueForm.sendNumberInput()

  }
 getValueFirstInput(){
   return this.formGroupInputOne.valueChanges.subscribe(value=>this.inputNumberValueOne=value.firstInputPrevState)
 }

 getValueSecondInput(){
    return this.formGroupInputSecond.valueChanges.subscribe(value=>this.inputNumberValueTwo=value.secondInputPrevState)
 }

}
