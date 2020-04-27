import { Directive, EventEmitter, OnInit, OnDestroy, Renderer2, ElementRef, Output } from '@angular/core';

@Directive({
  selector: '[shift-click]'
})
export class ShiftClickDirective implements OnInit, OnDestroy {

  private unsubscribe: any;

  // tslint:disable-next-line:no-output-rename
  @Output('shift-click') shiftClickEvent = new EventEmitter();

  constructor(
    private readonly renderer: Renderer2,
    private readonly element: ElementRef
  ) { }

  ngOnInit() {

    this.unsubscribe = this.renderer
      .listen(
        this.element.nativeElement,
        'click', (event: KeyboardEvent) => {
          
          if (event.shiftKey) {

            event.preventDefault();
            event.stopPropagation();

            // unselect accidentally selected text (browser default behaviour)
            document.getSelection().removeAllRanges();

            this.shiftClickEvent.emit(event);
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
