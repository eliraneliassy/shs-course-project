import { Action } from '@ngrx/store';
import { Item } from '../item';
import { FeedActions, FeedActionTypes } from './feed.actions';


export interface FeedState {
  items: Item[];
  page: number;
  loading: boolean;
}

export const initialState: FeedState = {
  items: [],
  page: 0,
  loading: false
};

export function reducer(state = initialState, action: FeedActions): FeedState {
  switch (action.type) {

    case (FeedActionTypes.LoadFeed): {
      return {...state, loading: true}
    }

    case (FeedActionTypes.LoadFeedSucces): {
      return {...state, loading: false, items: [...state.items, ...action.payload]}
    }



    default:
      return state;
  }
}
