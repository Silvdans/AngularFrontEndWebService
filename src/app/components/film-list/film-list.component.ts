import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { USER_CONTEXT_DEV } from 'user_context.conf';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {
  @Input() genre = {};
  @Input() event = {};
  title = 'WebFront';
  results = [];
  base_url = 'https://image.tmdb.org/t/p/original'
  user = {}

  constructor(private moviesService : MoviesService) {}

  ngOnInit(): void {
    this.setMovies()
  }
  ngOnChanges(changes: SimpleChanges){
    if(this.event == true){
      this.getFavorites()
    }
    else{
      this.setMovies()
    }

  }

  setMovies(){
    this.moviesService.getMovies(this.genre).subscribe(response =>{
      this.results = response
    })
  }
  getFavorites(){
    this.moviesService.getFavorites(USER_CONTEXT_DEV.usersCurrentId).subscribe(response => {
      this.results = response;
    });
  }

}
