import { Directive, Output, OnDestroy, OnInit, EventEmitter, Renderer2, ElementRef } from '@angular/core';

/**
 * credit goes to David 
 * http://blog.davidjs.com/2019/11/ctrl-click-directive-in-angular/
 */
@Directive({
  selector: '[ctrl-click]'
})
export class CtrlClickDirective implements OnInit, OnDestroy {

  private unsubscribe: any;

  // tslint:disable-next-line:no-output-rename
  @Output('ctrl-click') ctrlClickEvent = new EventEmitter();

  constructor(
    private readonly renderer: Renderer2,
    private readonly element: ElementRef
  ) { }

  ngOnInit() {

    this.unsubscribe = this.renderer
      .listen(
        this.element.nativeElement,
        'click', (event: KeyboardEvent) => {
          if (event.ctrlKey) {

            event.preventDefault();
            event.stopPropagation();

            // unselect accidentally selected text (browser default behaviour)
            document.getSelection().removeAllRanges();

            this.ctrlClickEvent.emit(event);
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
