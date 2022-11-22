import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ItemService} from "../services/item-service/item.service";

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css'],
})
export class SuccessComponent implements OnInit {
  constructor(
    private router: Router,
    private itemService: ItemService
  ) {}

  ngOnInit(): void {}

  goBackToHome() {
    this.router.navigate(['/']);
  }
}
