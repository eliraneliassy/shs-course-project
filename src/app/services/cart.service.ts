import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Item } from '../item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _cart: BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>(null);

  constructor() { }

  getCart(): Observable<Item[]>{
    return this._cart.asObservable();
  }

  setCart(items: Item[]) {
    this._cart.next(items);
  }

  addToCart(item: Item){

  }

  removeFromCart(item: Item){

  }

  existInCart(item: Item): boolean{
    return false;
  }


}
