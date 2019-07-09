import { Component, OnInit, Input, Output, EventEmitter, AfterViewChecked, AfterViewInit, OnChanges, OnDestroy, DoCheck, AfterContentChecked, AfterContentInit, SimpleChanges } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit, AfterViewChecked, AfterViewInit, OnChanges, OnDestroy, DoCheck, AfterContentChecked, AfterContentInit {
  
  @Input() item: any;
  @Input() existInCart: boolean;
  @Output() addToCart: EventEmitter<Item> = new EventEmitter<Item>();
  @Output() removeFromCart: EventEmitter<Item> = new EventEmitter<Item>();

  constructor() { }

  

  addToCartClicked(item){
    this.addToCart.emit(item);
  }

  removeFromCartClicked(item){
    this.removeFromCart.emit(item);

  }

  ngOnInit() {
    // console.log('ngOnInit');
  }

  ngAfterViewChecked(): void {
    // console.log('ngAfterViewChecked');
  }
  ngAfterViewInit(): void {
    // console.log('ngAfterViewInit');
  }
  ngOnChanges(changes: SimpleChanges): void {
    // console.log('ngOnChanges', changes);
  }
  ngOnDestroy(): void {
    // console.log('ngOnDestroy');
  }
  ngDoCheck(): void {
    // console.log('ngDoCheck');
  }
  ngAfterContentChecked(): void {
    // console.log('ngAfterContentChecked');
  }
  ngAfterContentInit(): void {
    // console.log('ngAfterContentInit');
  }

}
