import {Component, Input} from '@angular/core';

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
constructor(){}
  @Input() datasource;
  selectedImage;

  setSelectedImage(image){
    this.selectedImage= image;
  }
}
