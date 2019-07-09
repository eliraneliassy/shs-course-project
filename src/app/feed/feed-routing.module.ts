import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedComponent } from './feed.component';
import { ProductResolveService } from '../services/product-resolve.service';
import { ProductPageComponent } from './product-page/product-page.component';


const routes: Routes = [
  { path: '', component: FeedComponent },
  { path: 'product/:id', component: ProductPageComponent, resolve: { item: ProductResolveService } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedRoutingModule { }
