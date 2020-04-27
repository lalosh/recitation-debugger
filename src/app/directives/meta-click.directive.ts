import { Directive, OnInit, OnDestroy, EventEmitter, Output, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[meta-click]'
})
export class MetaClickDirective implements OnInit, OnDestroy {

  private unsubscribe: any;

  // tslint:disable-next-line:no-output-rename
  @Output('meta-click') metaClickEvent = new EventEmitter();

  constructor(
    private readonly renderer: Renderer2,
    private readonly element: ElementRef
  ) { }

  ngOnInit() {

    this.unsubscribe = this.renderer
      .listen(
        this.element.nativeElement,
        'click', (event: KeyboardEvent) => {
          if (event.metaKey) {

            event.preventDefault();
            event.stopPropagation();

            // unselect accidentally selected text (browser default behaviour)
            document.getSelection().removeAllRanges();

            this.metaClickEvent.emit(event);
          }
        });
  }

  ngOnDestroy() {
    if (!this.unsubscribe) {
      return;
    }
    this.unsubscribe();
  }
}
