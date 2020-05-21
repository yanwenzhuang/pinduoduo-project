import { Directive, Renderer2, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appGridItemImage]'
})
export class GridItemImageDirective {
  @Input() appGridItemImage = '2rem';
  constructor(private elf: ElementRef,private rd2: Renderer2){
    this.rd2.setStyle(this.elf.nativeElement,'grid-area','image');
    this.rd2.setStyle(this.elf.nativeElement,'width',this.appGridItemImage);
    this.rd2.setStyle(this.elf.nativeElement,'height',this.appGridItemImage);
    this.rd2.setStyle(this.elf.nativeElement,'object-fit','cover');
  }

  @HostListener('click',['$event.target'])
  handleClick(ev){
    console.log("测试:", ev);
  }
}
