import { Component, OnInit } from '@angular/core';
export interface Channel{
  id: number;
  icon: string;
  title: string;
  link: string;
}
@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.scss']
})
export class HorizontalGridComponent implements OnInit {
  channels: Channel[]=[{
    id: 1,
    icon: 'https://img.51miz.com/Element/00/81/98/92/ef32c446_E819892_049181fe.png!/quality/90/unsharp/true/compress/true/format/png/fh/630',
    title: '限时秒杀',
    link: 'hot'
  },{
    id: 2,
    icon: 'https://img.51miz.com/Element/00/81/98/92/ef32c446_E819892_049181fe.png!/quality/90/unsharp/true/compress/true/format/png/fh/630',
    title: '限时2',
    link: 'body'
  },{
    id: 3,
    icon: 'https://img.51miz.com/Element/00/81/98/92/ef32c446_E819892_049181fe.png!/quality/90/unsharp/true/compress/true/format/png/fh/630',
    title: '限时3',
    link: 'cc'
  },{
    id: 4,
    icon: 'https://img.51miz.com/Element/00/81/98/92/ef32c446_E819892_049181fe.png!/quality/90/unsharp/true/compress/true/format/png/fh/630',
    title: '限时4',
    link: 'dd'
  },{
    id: 5,
    icon: 'https://img.51miz.com/Element/00/81/98/92/ef32c446_E819892_049181fe.png!/quality/90/unsharp/true/compress/true/format/png/fh/630',
    title: '限时5',
    link: 'ee'
  },{
    id: 6,
    icon: 'https://img.51miz.com/Element/00/81/98/92/ef32c446_E819892_049181fe.png!/quality/90/unsharp/true/compress/true/format/png/fh/630',
    title: '限时6杀',
    link: 'ff'
  },{
    id: 7,
    icon: 'https://img.51miz.com/Element/00/81/98/92/ef32c446_E819892_049181fe.png!/quality/90/unsharp/true/compress/true/format/png/fh/630',
    title: '限时7',
    link: 'gg'
  },{
    id: 8,
    icon: 'https://img.51miz.com/Element/00/81/98/92/ef32c446_E819892_049181fe.png!/quality/90/unsharp/true/compress/true/format/png/fh/630',
    title: '限时8',
    link: 'ff'
  },{
    id: 9,
    icon: 'https://img.51miz.com/Element/00/81/98/92/ef32c446_E819892_049181fe.png!/quality/90/unsharp/true/compress/true/format/png/fh/630',
    title: '限时5',
    link: 'ab'
  },{
    id: 10,
    icon: 'https://img.51miz.com/Element/00/81/98/92/ef32c446_E819892_049181fe.png!/quality/90/unsharp/true/compress/true/format/png/fh/630',
    title: '限时6杀',
    link: 'cd'
  },{
    id: 11,
    icon: 'https://img.51miz.com/Element/00/81/98/92/ef32c446_E819892_049181fe.png!/quality/90/unsharp/true/compress/true/format/png/fh/630',
    title: '限时7',
    link: 'ef'
  },{
    id: 12,
    icon: 'https://img.51miz.com/Element/00/81/98/92/ef32c446_E819892_049181fe.png!/quality/90/unsharp/true/compress/true/format/png/fh/630',
    title: '限时8',
    link: 'gf'
  },{
    id: 13,
    icon: 'https://img.51miz.com/Element/00/81/98/92/ef32c446_E819892_049181fe.png!/quality/90/unsharp/true/compress/true/format/png/fh/630',
    title: '限时5',
    link: 're'
  },{
    id: 14,
    icon: 'https://img.51miz.com/Element/00/81/98/92/ef32c446_E819892_049181fe.png!/quality/90/unsharp/true/compress/true/format/png/fh/630',
    title: '限时6杀',
    link: 'fr'
  },{
    id: 15,
    icon: 'https://img.51miz.com/Element/00/81/98/92/ef32c446_E819892_049181fe.png!/quality/90/unsharp/true/compress/true/format/png/fh/630',
    title: '限时7',
    link: 'rr'
  },{
    id: 16,
    icon: 'https://img.51miz.com/Element/00/81/98/92/ef32c446_E819892_049181fe.png!/quality/90/unsharp/true/compress/true/format/png/fh/630',
    title: '限时8',
    link: 'mm'
  }];
  constructor() { }

  ngOnInit() {
  }

}
