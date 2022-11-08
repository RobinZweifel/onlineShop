import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  amount: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  addOne(){
    this.amount = this.amount + 1;
  }

  removeOne(){
    if (this.amount > 0) {
      this.amount = this.amount - 1;
    }
  }

}
