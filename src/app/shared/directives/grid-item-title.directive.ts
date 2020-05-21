import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appGridItemTitle]'
})
export class GridItemTitleDirective {

  constructor(private elf: ElementRef,private rd2: Renderer2){
    this.rd2.setStyle(this.elf.nativeElement,'grid-area','title')
  }

}
