import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appGridItem]'
})
export class GridItemDirective {
  @HostBinding('style.display') display = 'grid';
  @HostBinding('style.grid-template-areas') template = `'image' 'title'`;
  @HostBinding('style.place-items') align = 'center';
  @HostBinding('style.width') width = '4rem';

  // constructor(private elf: ElementRef,private rd2: Renderer2){
  //   this.rd2.setStyle(this.elf.nativeElement,'display','grid');
  //   this.rd2.setStyle(this.elf.nativeElement,'grid-template-areas',`'image' 'title'`);
  //   this.rd2.setStyle(this.elf.nativeElement,'place-items','center');
  //   this.rd2.setStyle(this.elf.nativeElement,'width','4rem');
  // }

}
