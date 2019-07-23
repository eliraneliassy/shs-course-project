import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedRoutingModule } from './feed-routing.module';
import { FeedComponent } from './feed.component';

import { SharedModule } from '../shared/shared.module';
import { ProductPageComponent } from './product-page/product-page.component';
import { MatDialogModule } from '@angular/material/dialog';
import { StoreModule } from '@ngrx/store';
import { reducer } from './feed.reducer';
import { EffectsModule } from '@ngrx/effects';
import { FeedEffects } from './feed.effects';


@NgModule({
  declarations: [FeedComponent, ProductPageComponent],
  imports: [
    CommonModule,
    FeedRoutingModule,
    SharedModule,
    MatDialogModule,
    StoreModule.forFeature('feed', reducer),
    EffectsModule.forFeature([FeedEffects])
  ],
  entryComponents: [ProductPageComponent]
})
export class FeedModule { }
