import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { HttpClientModule } from '@angular/common/http';
import { HighlightDirective } from './directives/highlight.directive';
import { InfinteScrollDirective } from './directives/infinte-scroll.directive';
import { NgNotIfDirective } from './directives/ng-not-if.directive';
import { DiscountPipe } from './discount.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    HighlightDirective,
    InfinteScrollDirective,
    NgNotIfDirective,
    DiscountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
