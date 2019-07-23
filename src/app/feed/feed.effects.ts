import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { FeedActionTypes, LoadFeedSuccess } from './feed.actions';
import { switchMap, map } from 'rxjs/operators';
import { FeedService } from '../services/feed.service';



@Injectable()
export class FeedEffects {

  constructor(private actions$: Actions,
    private feedService: FeedService) {}

  @Effect()
  loadFeed$ = this.actions$.pipe(
    ofType(FeedActionTypes.LoadFeed),
    switchMap(() => this.feedService.getFeed(0)),
    map((items) => new LoadFeedSuccess(items))
  )
}
