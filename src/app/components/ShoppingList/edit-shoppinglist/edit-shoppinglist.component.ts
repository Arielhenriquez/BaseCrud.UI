import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShoppingList } from 'src/app/models/ShoppingList';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-edit-shoppinglist',
  templateUrl: './edit-shoppinglist.component.html',
  styleUrls: ['./edit-shoppinglist.component.css']
})
export class EditShoppinglistComponent implements OnInit {
  @Input() shoppingLists?: ShoppingList;
  @Output() ShoppingListUpdated = new EventEmitter<ShoppingList[]>();

  constructor(private baseService: ShoppingListService) { }

  ngOnInit(): void {
  }

  createShoppingList(shoppingList: ShoppingList) {
    this.baseService
      .createShoppingList(shoppingList)
      .subscribe((shoppingLists: ShoppingList[]) => this.ShoppingListUpdated.emit(shoppingLists))
  }

  updateShoppingList(shoppingList: ShoppingList) {
    this.baseService
      .updateShoppingList(shoppingList)
      .subscribe((shoppingLists: ShoppingList[]) => this.ShoppingListUpdated.emit(shoppingLists))
  }

  deleteShoppingList(shoppingList: ShoppingList) {
    this.baseService
      .deleteShoppingList(shoppingList)
      .subscribe((shoppingLists: ShoppingList[]) => this.ShoppingListUpdated.emit(shoppingLists))
  }
}
