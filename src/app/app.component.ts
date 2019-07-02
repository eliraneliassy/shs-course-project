import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { db } from './db';
import { Item } from './item';
import { FeedService } from './services/feed.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  
  //items: Item[] = [];
  items$: Observable<Item[]>;
  shoppingCart: Item[] = [];

  constructor(private feedService: FeedService) {}

  ngOnInit(): void {
    //this.feedService.getFeed(0).subscribe((items: Item[]) => this.items = items);
    this.items$ = this.feedService.getFeed(0);
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
