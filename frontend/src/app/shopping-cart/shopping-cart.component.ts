import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ItemService} from "../services/item-service/item.service";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  itemList!: any[];
  items: any[] = [];
  subTotal!: any;

  constructor(private router: Router, private itemService: ItemService) { }

  ngOnInit(): void {
  }

}
