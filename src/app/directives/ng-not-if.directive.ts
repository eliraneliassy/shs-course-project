import { Directive, ViewContainerRef, TemplateRef, Input, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[NgNotIf]'
})
export class NgNotIfDirective implements AfterViewInit {

  condition: string;

  @Input() set NgNotIf(condition: string) {
    this.condition = condition;
  }

  constructor(private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>) { }

  ngAfterViewInit(): void {
    throw new Error("Method not implemented.");
  }



}
