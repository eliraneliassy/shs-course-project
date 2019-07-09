import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanLoad, Route, UrlSegment } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  canLoad(route: Route, segments: UrlSegment[]):
    boolean | Observable<boolean> | Promise<boolean> {
      return this.authService.getUserName().pipe(
        switchMap((user) => {
          if (user) {
            return of(true)
          } else {
            this.router.navigateByUrl('/');
            return of(false);
          }
        })
      );
  }

  constructor(private authService: AuthService, private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.getUserName().pipe(
      switchMap((user) => {
        if (user) {
          return of(true)
        } else {
          this.router.navigateByUrl('/');
          return of(false);
        }
      })
    );
  }

}
