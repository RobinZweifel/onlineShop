import { Injectable } from '@angular/core';
import {Item} from "../../model/item";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  test: number = 0;

  items: ({ quantity: number; price: number; imageUrl: string; name: string; description: string; id: number })[] = [
    {
      id: 1,
      description: "This is a test description",
      imageUrl: "https://uweed.ch/wp-content/uploads/2021/01/firstclass-cbd-prerolls-white-widow-01.jpg",
      price: 100,
      name: "Test Item",
      quantity: 1
    },
    {
      id: 2,
      name: 'Item 2',
      description: 'Description 2',
      price: 200,
      imageUrl: 'https://uweed.ch/wp-content/uploads/2022/05/Slow-Weed_White-Russian-Outdoor_Small_Buds_03.png',
      quantity: 1
    },
    {
      id: 3,
      name: 'Item 3',
      description: 'Description 3',
      price: 300,
      imageUrl: 'https://uweed.ch/wp-content/uploads/2022/07/mary_cbd_flower_super_skunk_1.jpg',
      quantity: 1
    },
    {
      id: 4,
      name: 'Item 4',
      description: 'Description 4',
      price: 300,
      imageUrl: 'https://uweed.ch/wp-content/uploads/2022/07/mary_cbd_flower_super_skunk_1.jpg',
      quantity: 1
    }
  ];

  constructor() { }

  getItems() {
    return this.items;
  }
}
