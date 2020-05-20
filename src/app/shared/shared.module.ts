import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollableTabComponent } from './components';
import { ImageSlideComponent } from './components';
import { HorizontalGridComponent } from './components/horizontal-grid/horizontal-grid.component';


@NgModule({
  declarations: [
    ScrollableTabComponent,
    ImageSlideComponent,
    HorizontalGridComponent
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
  ]
})
export class SharedModule { }
