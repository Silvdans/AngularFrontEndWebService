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
  constructor(public http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>('https://api.themoviedb.org/3/discover/movie?api_key=165356acc658c8fec0740ab02219d1ab')
    .subscribe(response => {
      this.results = response.results
    });
  }

}
