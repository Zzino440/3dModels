import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {BimViewerComponent} from "./bim-viewer/bim-viewer.component";
import { LaVisioneComponent } from './la-visione/la-visione/la-visione.component';
import {NgbCarouselModule} from "@ng-bootstrap/ng-bootstrap";
import {FooterComponent} from "./footer/footer.component";

@NgModule({
  declarations: [
    AppComponent,
    BimViewerComponent,
    LaVisioneComponent,
    FooterComponent
  ],
    imports: [
        BrowserModule,
        NgbCarouselModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
