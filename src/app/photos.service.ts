import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
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

  getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>(this.nasaUrl)
      .pipe(
        tap(() => console.log('fetched heroes')),
        catchError(this.handleError<Photo[]>('getPhotos', []))
      )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation}: ${error}`);
      return of(result as T);
    };
  }
}
