import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  ViewChildren,
  QueryList,
  Renderer2,
  AfterViewInit,
  OnDestroy,
} from "@angular/core";
import { isNgTemplate } from "@angular/compiler";
export interface ImageSlider {
  imgUrl: string;
  link: string;
  caption: string;
}
@Component({
  selector: "app-image-slide",
  templateUrl: "./image-slide.component.html",
  styleUrls: ["./image-slide.component.scss"],
})
export class ImageSlideComponent implements OnInit,AfterViewInit,OnDestroy {
  @Input() sliders: ImageSlider[] = [];
  @Input() slideHeight = '160px';
  @Input() intervalBySecond = 2;
  selectedIndex = 0;
  intervalId;
  @ViewChild("imageSlider", { static: true }) imgSlider: ElementRef;
  @ViewChildren("imgs") imgs: QueryList<ElementRef>;
  constructor(private rd2: Renderer2) {}

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.intervalId = setInterval(()=>{
      this.rd2.setProperty(
        this.imgSlider.nativeElement,
        'scrollLeft',
        (++this.selectedIndex % this.sliders.length) *this.imgSlider.nativeElement.scrollWidth / this.sliders.length);
    },this.intervalBySecond * 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  getIndex( idx: number): number{
    return idx >=0 ? idx * this.sliders.length :
    this.sliders.length - (Math.abs(idx) % this.sliders.length);
  }

  handleScroll(ev){
    let radio = ev.target.scrollLeft * this.sliders.length / ev.target.scrollWidth;
    this.selectedIndex = Math.round(radio);
  }
}
