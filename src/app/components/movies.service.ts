import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(public http: HttpClient) { }
  url : string = "http://localhost:8001/api/movies"
  url_genres : string = "http://localhost:8001/api/genres"
  movies = []

  public getMovies(params : any) : Observable<[]>{
    let parametres = new HttpParams().set('genres', params.id);
    return this.http.get<[]>(this.url, {params: parametres})
  }

  public getGenres(): Observable<[]>{
    return this.http.get<[]>(this.url_genres)
  }
}
