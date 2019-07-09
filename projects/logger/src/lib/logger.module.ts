import { NgModule, InjectionToken, ModuleWithProviders } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoggerService, APPNAME } from './logger.service';


@NgModule({
  declarations: [],
  imports: [
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, multi: true, useClass: LoggerService },

  ]

})
export class LoggerModule {
  static init(appName: string): ModuleWithProviders {
    return {
      ngModule: LoggerModule,
      providers: [{ provide: APPNAME, useValue: appName }]
    }
  }
}
