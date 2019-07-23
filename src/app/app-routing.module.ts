import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'feed', loadChildren: () => import('./feed/feed.module').then((m) => m.FeedModule) },
  {
    path: 'login', loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    // canLoad: [AuthGuard]
  }

];

// loadChildren:'./auth/auth.module#AuthModule

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
