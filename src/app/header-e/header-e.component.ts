import { Component, OnInit } from '@angular/core';
import { CyrrencyService } from 'src/cyrrency.service';
import { Item } from '../Item';

@Component({
  selector: 'app-header-e',
  templateUrl: './header-e.component.html',
  styleUrls: ['./header-e.component.css']
})
export class HeaderEComponent implements OnInit {
cyrrencyitem:Item[]=[]
  constructor(private service:CyrrencyService) { }

  ngOnInit(): void {
    this.getapi()
  }
 getapi(){
   this.service.getcyrrency().subscribe((c)=>console.warn(this.cyrrencyitem=c))
 }
}
