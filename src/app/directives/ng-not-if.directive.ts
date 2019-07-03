import { Directive, ViewContainerRef, TemplateRef, Input, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[NgNotIf]'
})
export class NgNotIfDirective {

  condition: boolean;

  @Input() set NgNotIf(condition: boolean) {
    if (condition) {
      this.viewContainer.clear();
    } else {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

  constructor(private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>) { }

}
