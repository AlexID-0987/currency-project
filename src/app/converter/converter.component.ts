import { convertActionBinding } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component, OnInit } from '@angular/core';
import { CyrrencyService } from 'src/cyrrency.service';
import { Part } from '../part';



@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
 
export class ConverterComponent implements OnInit {

par:Part[]=[]
num:number=1 
summa:number=0
summa1:number=0
num1:number=0
  constructor (private serv:CyrrencyService){}
  
  ngOnInit(): void {
    this.getapi()
  }
  getapi(){
    this.serv.getpart().subscribe((c)=>console.warn(this.par=c))
  }
  miltip():number{
   return  this.num*this.summa
    
  }
  division():number{
    return (this.num*this.summa)/this.summa1
  }
}
