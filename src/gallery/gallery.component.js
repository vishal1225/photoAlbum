"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var GalleryComponent = (function () {
    function GalleryComponent() {
    }
    GalleryComponent.prototype.setSelectedImage = function (image) {
        this.selectedImage = image;
    };
    __decorate([
        core_1.Input()
    ], GalleryComponent.prototype, "datasource", void 0);
    GalleryComponent = __decorate([
        core_1.Component({
            selector: 'gallery',
            templateUrl: './gallery.component.html',
            styleUrls: ['./gallery.component.css']
        })
    ], GalleryComponent);
    return GalleryComponent;
}());
exports.GalleryComponent = GalleryComponent;
