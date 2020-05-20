import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ScrollableTabComponent } from './components';
import { ImageSlideComponent } from './components';
import { QRCodeModule } from 'angular2-qrcode';
import { HorizontalGridComponent } from './components/horizontal-grid/horizontal-grid.component';
import { WowTestComponent } from './component/wow-test/wow-test.component';

@NgModule({
  declarations: [
    AppComponent,
    ScrollableTabComponent,
    ImageSlideComponent,
    HorizontalGridComponent,
    WowTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    QRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
