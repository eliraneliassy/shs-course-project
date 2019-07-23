import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FeedState } from './feed.reducer';


export const getFeedState = createFeatureSelector('feed');

export const getItems = createSelector(getFeedState, 
    (feedState: FeedState) => feedState.items);