import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
/* import USER_CONTEXT_DEV from '../../../user_context.conf.js'; */

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(public http: HttpClient) { }
  url : string = "http://localhost:8001/api/movies"
  urlGenres : string = "http://localhost:8001/api/genres"
  urlMovie : string = "http://localhost:8001/api/movies/"
  movies = []

  public getMovies(params : any) : Observable<[]>{
    let parametres = new HttpParams().set('genres', params.id);
    return this.http.get<[]>(this.url, {params: parametres})
  }

  public getGenres(): Observable<[]>{
    return this.http.get<[]>(this.urlGenres)
  }

  public getMovie(id : string | null): Observable<{}>{
    return this.http.get<{}>(this.urlMovie+id)
  }
}
