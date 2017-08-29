import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { GalleryComponent } from './gallery.component';

@NgModule({
  declarations: [
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [GalleryComponent],
  exports: [GalleryComponent]
})
export class GalleryModule { }
