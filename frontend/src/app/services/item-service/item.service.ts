import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Subject} from "rxjs";
import {Item} from "../../model/Item";
import {ItemRestResponse} from "../../model/ItemRestResponse";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private readonly _allItems$: Subject<Item[]> = new BehaviorSubject<Item[]>([]);
  readonly allItems$ = this._allItems$.asObservable();
  private readonly allItemsStore: Item[] = [];

  itemsH: ({ quantity: number; price: number; imageUrl: string; name: string; description: string; id: number })[] = [
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

  constructor(private http: HttpClient) {
    this.getItems();
  }

  get(){
    this.http.get('http://localhost:8080/items').pipe(response => response);
  }

  emitItems() {
    this._allItems$.next([...this.allItemsStore]);
  }

  getItems() {
    this.http.get<ItemRestResponse>('http://localhost:8080/items').subscribe(response => {
      if (response.status === 200) {
        response.items.forEach(item => {
          this.allItemsStore.push(item);
        });
        this.emitItems();
      }
    });
    this.emitItems();
  }
}
