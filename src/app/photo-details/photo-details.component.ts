import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotosService } from '../photos.service';
import { Photo } from '../Photo';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.scss']
})
export class PhotoDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private photosService: PhotosService
  ) { }
  
  photo: Photo;
  isLoading: boolean = true;
  showDetails: boolean = false;

  ngOnInit() {
    const photoDate: string = this.route.snapshot.paramMap.get('id');
    this.photosService.getPhoto(photoDate)
      .subscribe(photo => this.photo = photo);
    this.isLoading = false;
  }

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }

}
