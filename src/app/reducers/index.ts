import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { AuthState, reducer } from '../auth/auth-reducer.reducer';

export interface AppState {
  authState: AuthState
}

export const reducers: ActionReducerMap<AppState> = {
  authState: reducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
