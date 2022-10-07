import {Component, OnInit} from '@angular/core';
import {CyrrencyService} from 'src/app/common/services/cyrrency.service';
import {Part} from '../common/interfaces/part';
import key from "../common/state/objectApi";
import InitializationClassProjectState from "../common/state/initializationClassProjectState";
import InitializationClassInputState from "../common/state/initializationClassInputState";
import InitializationReactiveForm from "../common/reactiveFormForProject/initializationReactiveForm";
import InitializationSecondReativeForm from "../common/reactiveFormForProject/initializationSecondReativeForm";




@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})

export class ConverterComponent implements OnInit {

  par: Part[] = []
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
  firstInputFormControl=InitializationReactiveForm
  secondInputFormControl=InitializationSecondReativeForm
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
  multipleFirstTwoNumbers(){
    return this.responseFirstInput=this.objectValueOne*this.inputNumberValueTwo
  }
  multipleSecondTwoNumbers(){
    return this.responseSecondInput=this.objectValueTwo*this.inputNumberValueOne
  }
  reset() {
   this.inputNumberValueOne=this.inputValueForm.sendNumberInput()
    this.inputNumberValueTwo=this.inputValueForm.sendNumberInput()

  }


}
