var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { FacebookService } from 'ngx-facebook';
export var AppComponent = (function () {
    function AppComponent(fb) {
        this.fb = fb;
        this.title = 'Photo Album';
        this.images = [];
        this.name = "";
        this.isUser = false;
        var initParams = {
            appId: '161318487764837',
            cookie: true,
            xfbml: true,
            version: 'v2.8'
        };
        fb.init(initParams);
    }
    AppComponent.prototype.login = function () {
        var token = '';
        var options = {
            scope: 'public_profile,user_photos',
            return_scopes: true,
            enable_profile_selector: true
        };
        var that = this;
        var accessToken = '';
        var imagearray = [];
        this.fb.login(options)
            .then(function (response) {
            accessToken = response.authResponse.accessToken;
            that.isUser = true;
            console.log('Logged in', response);
            that.fb.api('/me?fields=id,name,albums.fields(photos.fields(id,images))', 'get', { access_token: accessToken })
                .then(function (res) {
                that.name = res.name;
                for (var index = 0; index < res.albums.data.length; index++) {
                    if (res.albums.data[index].photos) {
                        var albumPhotosData = res.albums.data[index].photos.data;
                        for (var innerIndex = 0; innerIndex < albumPhotosData.length; innerIndex++) {
                            var images = albumPhotosData[innerIndex].images;
                            if (imagearray.indexOf(images[0].source.trim()) == -1) {
                                imagearray.push(images[0].source.trim());
                            }
                        }
                    }
                }
                that.images = imagearray;
            })
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error('Error logging in'); });
    };
    AppComponent.prototype.logout = function () {
        this.fb.logout().then(function () { return console.log('Logged out!'); });
        this.images = [];
        this.isUser = false;
    };
    AppComponent = __decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }), 
        __metadata('design:paramtypes', [FacebookService])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/vssharma/IdeaProjects/photoAlbum/src/app/app.component.js.map