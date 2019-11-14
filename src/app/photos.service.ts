import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Photo } from './Photo'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  private nasaUrl: string = `https://api.nasa.gov/planetary/apod?api_key=${environment.nasaApiKey}`;

  constructor(
    private http: HttpClient
  ) { }

  getPhoto(photoDate: string): Observable<Photo> {
    return this.http.get<Photo>(`${this.nasaUrl}&date=${photoDate}`)
      .pipe(
        catchError(this.handleError<Photo>('getPhoto', {} as Photo))
      )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation}: ${error}`);
      return of(result as T);
    };
  }
}
