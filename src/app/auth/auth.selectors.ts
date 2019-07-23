import { createFeatureSelector, createSelector, State } from '@ngrx/store';
import { AuthState } from './auth-reducer.reducer';
import { AppState } from '../reducers';

export const getAuthState = createFeatureSelector<AuthState>('authState');

export const getUser = createSelector(getAuthState,
    (state: AuthState) => state.user);