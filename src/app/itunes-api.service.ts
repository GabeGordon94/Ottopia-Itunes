import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItunesApiService {

  constructor(private http: HttpClient, ) { }

  private itunesUrl = "https://itunes.apple.com/search?limit=15&&term="

  getResults(query: string): Observable<string[]> {

    const queryArray = query.split(' ')
    const paramString = queryArray.join('+')
    return this.http.get<string[]>(this.itunesUrl + paramString)
      .pipe(
        catchError(this.handleError<string[]>('getResults', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
