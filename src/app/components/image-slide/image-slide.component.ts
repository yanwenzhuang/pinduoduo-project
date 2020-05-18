import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  ViewChildren,
  QueryList,
  Renderer2,
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
export class ImageSlideComponent implements OnInit {
  @Input() sliders: ImageSlider[] = [];
  @ViewChild("imageSlider", { static: true }) imgSlider: ElementRef;
  @ViewChildren("imgs") imgs: QueryList<ElementRef>;
  constructor(private rd2: Renderer2) {}

  ngOnInit() {
    console.log("ngOnInit", this.imgSlider);
  }

  ngAfterViewInit(): void {
    // console.log("ngAfterViewInit", this.imgs);
    // this.imgs.forEach((item) => (item.nativeElement.style.height = "100px"));
    this.imgs.forEach(item =>{
      this.rd2.setStyle(item.nativeElement,'height','100px');
    })
  }
}
