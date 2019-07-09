import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from '../item/item.component';
import { InfinteScrollDirective } from '../directives/infinte-scroll.directive';
import { HighlightDirective } from '../directives/highlight.directive';
import { DiscountPipe } from '../pipes/discount.pipe';



@NgModule({
  declarations: [
    ItemComponent, InfinteScrollDirective, HighlightDirective,
    DiscountPipe
  ],
  exports: [ItemComponent, InfinteScrollDirective, HighlightDirective,
    DiscountPipe],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
