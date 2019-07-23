import { Action } from '@ngrx/store';
import { Item } from '../item';

export enum FeedActionTypes {
  LoadFeed = '[Feed] Load Feed',
  LoadFeedSucces = '[Feed] Load Feed Success'


}

export class LoadFeed implements Action {
  readonly type = FeedActionTypes.LoadFeed;
}

export class LoadFeedSuccess implements Action {
  readonly type = FeedActionTypes.LoadFeedSucces;
  
  constructor(public payload: Item[]) { }
}


export type FeedActions = LoadFeed | LoadFeedSuccess;
