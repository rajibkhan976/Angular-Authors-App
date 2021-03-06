import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Author } from './author';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: HttpClient) { }

  getAuthors() {
    return this.http.get('https://api.quotable.io/authors?limit=10&skip=20')
    .pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        throw new Error("Fetching authors data failed!");
      })
    );
  }
}
