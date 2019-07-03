import { Directive, ElementRef, OnInit, AfterViewInit, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements AfterViewInit {
  
  @Input() color = 'yellow';
  
  constructor(private element: ElementRef,
    private renderer: Renderer2) { 
    console.log(this.element);
  }

  ngAfterViewInit(): void {
    // this.element.nativeElement.style.color = this.color;
    this.renderer.setStyle(this.element.nativeElement, 'color', this.color);
  }



}
