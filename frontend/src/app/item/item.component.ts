import {Component, Input, OnInit} from '@angular/core';
import {ItemService} from "../services/item-service/item.service";
import {Item} from "../model/Item";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  amount: number = 0;
  items: Item[] = [];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.allItems$.subscribe(items => {
      this.items = items;
      console.log(this.items);
    });
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
