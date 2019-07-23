import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AuthActionTypes, UserLoginSuccess } from './auth-actions.actions';
import { switchMap, map, tap } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';




@Injectable()
export class AuthEffects {

  constructor(private actions$: Actions,
    private router: Router) { }

  @Effect()
  userLogin$ = this.actions$.pipe(
    ofType(AuthActionTypes.UserLogin),
    map((action: any) => new UserLoginSuccess(action.payload))
  )

  @Effect({ dispatch: false })
  userLoginSuccess$ = this.actions$.pipe(
    ofType(AuthActionTypes.UserLoginSuccess),
    tap(() => this.router.navigateByUrl('/feed'))
  )
}
