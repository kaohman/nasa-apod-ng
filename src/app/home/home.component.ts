import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';
import { Photo } from '../Photo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private photosService: PhotosService) {}
  
  photos: Photo[] = [];

  dates: string[] = [ '2019-11-14', '2019-11-13', '2019-11-12'];
  
  ngOnInit() {
    this.getPhotos();
  }
  
  getPhotos(): void {
      this.photosService.getPhotos(this.dates)
      .subscribe(photos => this.photos =  photos);
  }

}
