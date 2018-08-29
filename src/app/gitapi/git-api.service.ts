import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { GitData } from './gitData';

@Injectable({
  providedIn: 'root'
})
export class GitAPIService {

  private Url = 'https://api.github.com/users/';

  constructor(
    private http: HttpClient
  ) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred: ', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }

    return throwError('Something bad happened; please try again later.');
  }

  getData(id: string): Observable<GitData> {
    return this.http.get<GitData>(this.Url + id)
    .pipe(
      tap(data => console.log('Success!')),
      catchError(this.handleError)
    );
  }

}
