var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
export var GalleryModule = (function () {
    function GalleryModule() {
    }
    GalleryModule = __decorate([
        NgModule({
            imports: [
                BrowserModule,
                FormsModule,
                HttpModule
            ],
            providers: [],
            bootstrap: [],
            exports: []
        }), 
        __metadata('design:paramtypes', [])
    ], GalleryModule);
    return GalleryModule;
}());
//# sourceMappingURL=C:/Users/vssharma/IdeaProjects/photoAlbum/src/gallery/gallery.module.js.map