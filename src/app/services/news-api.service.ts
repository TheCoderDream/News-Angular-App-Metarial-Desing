import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, of, pipe, Subject, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  public articlesWasChanged = new Subject();

  private key = 'bdfc626e503748f5be403db393ec0e47';
  private url = 'https://newsapi.org/v2/';

  constructor(private http: HttpClient) {
  }

  getSources(): Observable<any> {
    return this.http.get(`${this.url}sources?language=en&apiKey=${this.key}`)
      .pipe(
        tap(news => console.log('get news ', news)),
        catchError(this.handleError('getNews', []))
      );
  }

  getArticles(): Observable<any> {
    return this.http.get(`${this.url}top-headlines?sources=techcrunch&apiKey=${this.key}`)
      .pipe(
        tap(articles => console.log('get articles ', articles)),
        catchError(this.handleError('getArticles', []))
      );
  }

  getArticlesBySource(source: string) {
    return this.http.get(`${this.url}top-headlines?sources=${source}&apiKey=${this.key}`)
      .pipe(
        tap(articles => console.log('get articles by id ', articles)),
        catchError(this.handleError('getArticlesById', []))
      );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
