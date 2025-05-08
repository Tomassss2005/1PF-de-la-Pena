import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: false
})
export class HighlightDirective {

  constructor(private element: ElementRef) {
    console.log('Directiva funcionando correctamente', element);
    this.element.nativeElement.style.fontSize = '20px';
  }

}
