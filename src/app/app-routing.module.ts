import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedComponent } from './feed/feed.component';
import { LoginComponent } from './login/login.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductResolveService } from './services/product-resolve.service';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'feed', component: FeedComponent },
  { path: 'product/:id', component: ProductPageComponent, resolve: { item: ProductResolveService } }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
