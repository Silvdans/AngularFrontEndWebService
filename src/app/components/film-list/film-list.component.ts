import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {
  title = 'WebFront';
  results = [];
  base_url = 'https://image.tmdb.org/t/p/original'
  url : string = "http://localhost:8001/api/movies"
  constructor(public http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>(this.url)
    .subscribe(response => {
      this.results = response
    });
  }

}
