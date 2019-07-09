import { Injectable, Inject, InjectionToken } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

export const APPNAME = new InjectionToken<string>('App Name');

@Injectable({
  providedIn: 'root'
})
export class LoggerService implements HttpInterceptor {
  
  constructor(@Inject(APPNAME) private appName: string) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): 
  Observable<HttpEvent<any>> {
    console.log('App name :' + this.appName, req)
    return next.handle(req);
  }
}
