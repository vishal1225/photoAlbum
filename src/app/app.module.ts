import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GalleryComponent } from '../gallery/gallery.component';
import {FacebookModule} from "ngx-facebook";



@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    FacebookModule.forRoot(),
    HttpModule
  ],
  // providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
