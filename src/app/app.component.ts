import { Component } from '@angular/core';
import {getLocaleTimeFormat} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'currency-project';
  dateTimeNow:string=''
  date:string=''

  ngOnInit(): void {
    this.getTimeNow()


  }
  getTimeNow() {
    setInterval(() => {
      return this.dateTimeNow = new Date().toLocaleTimeString(), this.date=new Date().toLocaleDateString()
    }, 1000);
  }
}

