import { Component, OnInit } from '@angular/core';
import { ShoppingList } from 'src/app/models/ShoppingList';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-add-shopping-list',
  templateUrl: './add-shopping-list.component.html',
  styleUrls: ['./add-shopping-list.component.css']
})
export class AddShoppingListComponent implements OnInit {
  shoppingLists: ShoppingList[] = [];
  shoppingToEdit?: ShoppingList;

  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit(): void {
    this.shoppingService
      .getShoppingList()
      .subscribe((results: ShoppingList[]) => (this.shoppingLists = results))
  }

  initNewShoppingList() {
    this.shoppingToEdit = new ShoppingList();
  }

  updateShoppingList(shoppingLists: ShoppingList[]) {
    this.shoppingLists = shoppingLists;
  }

  editShoppingList(shoppingLists: any) {
    this.shoppingToEdit = shoppingLists;
  }

}


