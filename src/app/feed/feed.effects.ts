import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { FeedActionTypes, LoadFeedSuccess, IncreasePage } from './feed.actions';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import { FeedService } from '../services/feed.service';
import { Store } from '@ngrx/store';
import { getFeedState } from './feed.selectors';
import { FeedState } from './feed.reducer';



@Injectable()
export class FeedEffects {

  constructor(private actions$: Actions,
    private feedService: FeedService,
    private store$: Store<any>) {}

  @Effect()
  loadFeed$ = this.actions$.pipe(
    ofType(FeedActionTypes.LoadFeed),
    withLatestFrom(this.store$.select(getFeedState)),
    switchMap(([action, feedState]: any) => {
      console.log('action ' ,action);
      console.log('store ', feedState);
      return this.feedService.getFeed(feedState.page)
    }),
    map((items) => new LoadFeedSuccess(items))
  )

  @Effect()
  loadFeedSuccess$ = this.actions$.pipe(
    ofType(FeedActionTypes.LoadFeedSucces),
    map(() => new IncreasePage())
    
  )
}
