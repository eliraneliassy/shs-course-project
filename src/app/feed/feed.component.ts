import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { FeedService } from '../services/feed.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  items: Item[] = [];
  // items$: Observable<Item[]>;
  shoppingCart: Item[] = [];
  loading: boolean;
  page: number = 0;


  constructor(private feedService: FeedService) { }

  ngOnInit(): void {
    //this.feedService.getFeed(0).subscribe((items: Item[]) => this.items = items);
    this.feedService.getFeed(this.page).subscribe((res: Item[]) => this.items = res);
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

  existInCart(item: Item): boolean {
    return this.shoppingCart.findIndex(x => x._id === item._id) > -1 ? true : false;
  }

  loadMore() {
    this.page++;
    this.loading = true;
    this.feedService.getFeed(this.page).subscribe(
      (res: Item[]) => {
        this.items = [...this.items, ...res];
        this.loading = false;
      }
    )
  }

}
