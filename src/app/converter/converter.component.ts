import { convertActionBinding } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {


  money=1;
  money2=28.30;
  from='USD'
  to='UA'
  buy={
  USD:28.30,
  UER:32.000,
  BTC:36250.09
  }

  convert():number{
    
    return this.money*this.buy.USD
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
