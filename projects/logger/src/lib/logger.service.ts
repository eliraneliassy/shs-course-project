import { Injectable, Inject, InjectionToken, Optional } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, EMPTY, of } from 'rxjs';
import { catchError, retry, retryWhen, tap } from 'rxjs/operators';

export const APPNAME = new InjectionToken<string>('App Name');

@Injectable({
  providedIn: 'root'
})
export class LoggerService implements HttpInterceptor {
  
  constructor(@Optional() @Inject(APPNAME) private appName: string) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): 
  Observable<HttpEvent<any>> {
    // console.log('App name :' + this.appName, req)
    return next.handle(req).pipe(
      retry(3)      
    );
  }
}
