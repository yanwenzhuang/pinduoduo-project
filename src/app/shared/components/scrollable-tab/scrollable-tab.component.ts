import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
export interface TopMenu{
  id: number;
  title: string;
  link?: string;
}
@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.scss']
})
export class ScrollableTabComponent implements OnInit {

  selectedIndex = -1;
  @Input() menus: TopMenu[] = [];
  @Input() titleActiveColor = "#fff";
  @Input() titleColor = "#fff";
  @Input() indicatorColor = "#fff";
  @Output() tabSelected = new EventEmitter();
  
  handleSelectIndex(index: number){
    this.selectedIndex = index;
    this.tabSelected.emit(this.menus[this.selectedIndex]);
  }

  ngOnInit() {
  }

}
