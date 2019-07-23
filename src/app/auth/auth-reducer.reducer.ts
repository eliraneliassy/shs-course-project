import { AuthActions, AuthActionTypes } from './auth-actions.actions';


export interface AuthState {
  user: string;
  loading: boolean;
}

export const initialState: AuthState = {
  user: null,
  loading: false
};

export function reducer(state = initialState, action: AuthActions): AuthState {
  switch (action.type) {

    case (AuthActionTypes.UserLogin):
      return { ...state, loading: true };

    case (AuthActionTypes.UserLoginSuccess): 
    return {...state, loading: false, user: action.payload}

    default:
      return state;
  }
}
