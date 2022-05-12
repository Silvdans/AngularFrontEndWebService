import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {
  @Input() genre = {};

  title = 'WebFront';
  results = [];
  base_url = 'https://image.tmdb.org/t/p/original'

  constructor(private moviesService : MoviesService) {}

  ngOnInit(): void {
    this.setMovies()
  }
  ngOnChanges(changes: SimpleChanges){
    this.setMovies()
  }

  setMovies(){
    this.moviesService.getMovies(this.genre).subscribe(response =>{
      this.results = response
    })
  }

}
