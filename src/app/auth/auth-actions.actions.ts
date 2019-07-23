import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  UserLogin = '[AuthActions] User Login',

  UserLoginSuccess = '[AuthActions] User Login Success',
}

export class UserLogin implements Action {
  readonly type = AuthActionTypes.UserLogin;

  constructor(public payload: string) { }
}

export class UserLoginSuccess implements Action {
  readonly type = AuthActionTypes.UserLoginSuccess;

  constructor(public payload: string) { }
}


export type AuthActions = UserLogin | UserLoginSuccess;
