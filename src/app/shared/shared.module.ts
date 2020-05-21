import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollableTabComponent } from './components';
import { ImageSlideComponent } from './components';
import { HorizontalGridComponent } from './components/horizontal-grid/horizontal-grid.component';
import { GridItemDirective } from './directives';
import { GridItemImageDirective } from './directives/grid-item-image.directive';
import { GridItemTitleDirective } from './directives/grid-item-title.directive';


@NgModule({
  declarations: [
    ScrollableTabComponent,
    ImageSlideComponent,
    HorizontalGridComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ScrollableTabComponent,
    ImageSlideComponent,
    HorizontalGridComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective
  ]
})
export class SharedModule { }
