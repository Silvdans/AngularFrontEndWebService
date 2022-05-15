import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
/* import USER_CONTEXT_DEV from '../../../user_context.conf.js'; */

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  buttonClicked: Subject<string>;
  constructor(public http: HttpClient) {this.buttonClicked = new Subject<string>(); }
  url : string = "http://localhost:8001/api/movies"
  urlGenres : string = "http://localhost:8001/api/genres"
  urlMovie : string = "http://localhost:8001/api/movies/"
  url_user : string = "http://localhost:8001/api/users/"
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

  public updateUser(paramsUser : {}, user : string): Observable<{}>{
    return this.http.put<{}>(this.url_user+user, paramsUser)
  }

  public getUser(user: string) : Observable<{}>{
    return this.http.get<{}>(this.url_user+user);
  }
  public updateMovie(id_movie:string | null, params :{}): Observable<{}>{
    return this.http.put<{}>(this.urlMovie+id_movie, params)
  }
  public getFavorites(id_user : string):Observable<[]>{
    return this.http.get<[]>(this.url_user+id_user+"/favorites")
  }
}
