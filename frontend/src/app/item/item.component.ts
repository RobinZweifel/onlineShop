import {Component, Input, OnInit} from '@angular/core';
import {ItemService} from "../services/item-service/item.service";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  amount: number = 0;
  items: ({ quantity: number; price: number; imageUrl: string; name: string; description: string; id: number })[] = [];


  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.getItems().forEach(item => {
      this.items.push(item);
      console.log(item);
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
