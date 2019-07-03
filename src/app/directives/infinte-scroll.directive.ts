import { Directive, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appInfinteScroll]'
})
export class InfinteScrollDirective {

  @Input() loading: boolean;
  @Output() endOfPage: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {

    if (this.loading) { return; }

    const distance = this.getDistanceFromBottom();
    if(distance < 20) {
      this.endOfPage.emit(true);
    }

  }

  getDistanceFromBottom(){
    const scrollPosition = window.pageYOffset;
    const windowSize = window.innerHeight;
    const bodyHeight = document.body.offsetHeight;

    return Math.max(bodyHeight - (scrollPosition +windowSize), 0);
  }

}
