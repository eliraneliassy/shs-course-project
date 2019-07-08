import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { HttpClientModule } from '@angular/common/http';
import { HighlightDirective } from './directives/highlight.directive';
import { InfinteScrollDirective } from './directives/infinte-scroll.directive';
import { NgNotIfDirective } from './directives/ng-not-if.directive';
import { DiscountPipe } from './pipes/discount.pipe';
import { AuthService } from './services/auth.service';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FeedComponent } from './feed/feed.component';
import { LoginComponent } from './login/login.component';
import { ProductPageComponent } from './product-page/product-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    HighlightDirective,
    InfinteScrollDirective,
    NgNotIfDirective,
    DiscountPipe,
    HeaderComponent,
    FeedComponent,
    LoginComponent,
    ProductPageComponent
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
