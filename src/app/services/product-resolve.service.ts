import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Item } from '../item';
import { Observable } from 'rxjs';
import { FeedService } from './feed.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolveService implements Resolve<Item> {
  
  constructor(private feedService: FeedService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
  Item | Observable<Item> | Promise<Item> {
    const productId = route.params['id'];

    return this.feedService.getProductById(productId);
  }
}
