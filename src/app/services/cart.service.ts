import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Item } from '../item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _cart: BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>([]);

  constructor() { }

  getCart(): Observable<Item[]> {
    return this._cart.asObservable();
  }

  setCart(items: Item[]) {
    this._cart.next(items);
  }

  addToCart(item: Item) {
    const cart: Item[] = this._cart.value;
    cart.push(item);
    this.setCart(cart);
  }

  removeFromCart(item: Item) {
    const cart: Item[] = this._cart.value;
    const index = cart.findIndex(x => x._id === item._id);
    if (index > -1) {
      cart.splice(index, 1);
    }

    this.setCart(cart);

  }

  existInCart(item: Item): boolean {
    const cart: Item[] = this._cart.value;

    return cart.findIndex(x => x._id === item._id) > -1 ? true : false;
  }



}
