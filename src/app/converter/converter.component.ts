import {Component, OnInit} from '@angular/core';
import {CyrrencyService} from 'src/app/common/services/cyrrency.service';
import {Part} from '../common/interfaces/part';
import key from "../common/state/objectApi";
import InitializationClassProjectState from "../common/state/initializationClassProjectState";
import InitializationClassInputState from "../common/state/initializationClassInputState";
import InitializationReactiveFormForCurrency
  from "../common/reactiveFormForProject/initializationReactiveFormForCurrency";
import InitializationSecondReactiveFormForCurrency
  from "../common/reactiveFormForProject/initializationSecondReactiveFormForCurrency";




@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})

export class ConverterComponent implements OnInit {

  par: Part[] = []


  constructor(private serv: CyrrencyService) {
  }


  ngOnInit(): void {
    this.getapi()

  }



  getapi() {
    this.serv.getpart().subscribe((c) => console.warn(this.par = c))
  }


}
