import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';
import { Photo } from '../Photo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private photosService: PhotosService) { }
  
  photos: Photo[] = [];
  selectedPhoto: Photo = {} as Photo;
  
  ngOnInit() {
    this.getPhotosForMonth();
  }

  getDates() {
    const currentYear = new Date().getFullYear().toString().padStart(4, '0');
    const currentMonth = (new Date().getMonth() + 1).toString().padStart(2, '0');
    const currentDayNum = new Date().getDate();

    const dates: string[] = [];
    for (let i: number = currentDayNum; i >= 1; i--) {
      const currentDay = i.toString().padStart(2, '0');
      dates.push(`${currentYear}-${currentMonth}-${currentDay}`)
    }
    return dates
  }
  
  getPhotosForMonth(): void {
      const dates: string[] = this.getDates();
      this.photosService.getPhotos(dates)
        .subscribe(photos => this.photos =  photos);
  }

  showDetails(photo: Photo) {
    this.selectedPhoto = photo;
    console.log(photo);
  }

}
