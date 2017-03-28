import { Component, OnInit } from '@angular/core';
import { ShoppingListAddComponent } from "./index";
import { ShoppingListService } from "./shopping-list.service";
import { Ingredient } from "../shared";

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {

  items: Ingredient[] = [];

  constructor(private sls: ShoppingListService) { }

  ngOnInit() {
    this.items = this.sls.getItems();
  }
}
