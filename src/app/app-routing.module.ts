import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { FeedComponent } from './feed/feed.component';
import { LoginComponent } from './auth/login/login.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductResolveService } from './services/product-resolve.service';
import { RegisterComponent } from './auth/register/register.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'feed', component: FeedComponent, canActivate: [AuthGuard] },
  { path: 'product/:id', component: ProductPageComponent, resolve: { item: ProductResolveService } },
  { path: 'login', loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule) }

];

// loadChildren:'./auth/auth.module#AuthModule

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
