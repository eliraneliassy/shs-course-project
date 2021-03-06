import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { FeedService } from '../services/feed.service';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ProductPageComponent } from './product-page/product-page.component';
import { Store } from '@ngrx/store';
import { LoadFeed } from './feed.actions';
import { getItems } from './feed.selectors';

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


  constructor(private feedService: FeedService,
    private cartService: CartService,
    private dialog: MatDialog,
    private store: Store<any>) { }

  ngOnInit(): void {
    //this.feedService.getFeed(0).subscribe((items: Item[]) => this.items = items);
    // this.feedService.getFeed(this.page).subscribe((res: Item[]) => this.items = res);

    this.store.dispatch(new LoadFeed());

    this.store.select(getItems)
    .subscribe((items) => this.items = items)

    this.cartService.getCart().subscribe(cart => {
      this.shoppingCart = cart;
      console.log(this.shoppingCart);
    });
  }

  addToCart(item: Item) {
    // thiss.shoppingCart.push(item);
    this.cartService.addToCart(item);
  }

  removeFromCart(item: Item) {
    // const index = this.shoppingCart.findIndex(x => x._id === item._id);
    // if (index > -1) {
    //   this.shoppingCart.splice(index, 1);
    // }

    this.cartService.removeFromCart(item);

  }

  existInCart(item: Item): boolean {
    // return this.shoppingCart.findIndex(x => x._id === item._id) > -1 ? true : false;
    return this.cartService.existInCart(item);
  }

  loadMore() {
    this.page++;
    this.loading = true;
    // this.feedService.getFeed(this.page).subscribe(
    //   (res: Item[]) => {
    //     this.items = [...this.items, ...res];
    //     this.loading = false;
    //   }
    // )

    this.store.dispatch(new LoadFeed());
  }

  goToProduct(item) {
    // this.router.navigate(['/feed/product', item._id])
    this.dialog.open(ProductPageComponent,
      { data: { item } });
  }

}
