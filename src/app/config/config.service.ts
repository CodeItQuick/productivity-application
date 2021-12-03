import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable()
export class ConfigService {
  configUrl = 'http://localhost:8080/assets/config.json';
  constructor(private http: HttpClient) {}

  getConfig() {
    return this.http.get<Config>(this.configUrl).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }

  getConfigResponse(): Observable<HttpResponse<Config>> {
    return this.http.get<Config>(this.configUrl, { observe: 'response' });
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }

  makeIntentionalError() {
    return this.http.get('not/a/real/url').pipe(catchError(this.handleError));
  }
}
export interface Config {
  productivityUrl: string;
  textfile: string;
  date: any;
}
