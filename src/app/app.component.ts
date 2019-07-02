import { Component, OnInit } from '@angular/core';
import { db } from './db';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  items: Item[] = db;
  shoppingCart: Item[] = [];

  ngOnInit(): void {
    console.log(db);
  }

  addToCart(item: Item) {
    this.shoppingCart.push(item);
  }

  removeFromCart(item: Item) {
    const index = this.shoppingCart.findIndex(x => x._id === item._id);
    if (index > -1) {
      this.shoppingCart.splice(index, 1);
    }

  }

  existInCart(item: Item): boolean{
    return this.shoppingCart.findIndex(x => x._id === item._id) > -1 ? true : false;
  }
}
