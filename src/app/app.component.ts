///<reference path="../../node_modules/@angular/core/src/metadata/lifecycle_hooks.d.ts"/>
import {Injectable, Component, OnInit, NgZone} from '@angular/core';

import {FacebookModule, FacebookService, InitParams, LoginResponse, LoginOptions} from 'ngx-facebook';
import {get} from "http";





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
 })
export class AppComponent {

  public title = 'Photo Album';
  public images= [];
  name="";
  isUser = false;
  constructor(private fb: FacebookService){
    let initParams: InitParams = {
      appId      : '161318487764837',
      cookie     : true,
      xfbml      : true,
      version    : 'v2.8'
    };
    fb.init(initParams);
  }

  login(){
      var token = '';
    const options: LoginOptions = {
      scope: 'public_profile,user_photos',
      return_scopes: true,
      enable_profile_selector: true
    };
    var that = this;
    var accessToken = '';
    var imagearray = [];
    this.fb.login(options)
      .then(function(response: LoginResponse) {
        accessToken = response.authResponse.accessToken;
        that.isUser = true;
        console.log('Logged in', response);
        that.fb.api('/me?fields=id,name,albums.fields(photos.fields(id,images))','get',{access_token : accessToken})
          .then(function(res) {
             that.name = res.name;
             for(var index = 0; index < res.albums.data.length; index++) {
               if ( res.albums.data[index].photos) {
                 var albumPhotosData = res.albums.data[index].photos.data;
                 for (var innerIndex = 0; innerIndex < albumPhotosData.length; innerIndex++) {
                   var images = albumPhotosData[innerIndex].images;
                     if(imagearray.indexOf(images[0].source.trim()) == -1){
                      imagearray.push(images[0].source.trim());
                   }
                 }
               }
             }
             that.images =imagearray;
          })
          .catch(e => console.error(e));

      })
      .catch(e => console.error('Error logging in'));
  }

  logout(){
    this.fb.logout().then(() => console.log('Logged out!'));
    this.images = [];
    this.isUser = false;
  }
}
