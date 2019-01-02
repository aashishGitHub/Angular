import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {AppPoll} from './app-poll';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class AppPollService{
    private pollUrl ='api/polls';
    //pollsData : AppPoll[]; 
    
constructor(private http: HttpClient){}

getPolls(): Observable<AppPoll[]>{
    return this.http.get<AppPoll[]>(this.pollUrl)
    .pipe(
        tap(data=> {
            //this.pollsData = data;
            // console.log(JSON.stringify(data))
       }),
        catchError(this.handleError)
    )
}

private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

}

