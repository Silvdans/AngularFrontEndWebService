import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-filter-film',
  templateUrl: './filter-film.component.html',
  styleUrls: ['./filter-film.component.css']
})
export class FilterFilmComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<{}>();
  constructor(private moviesService : MoviesService) { }
  genres = []
  ngOnInit(): void {
    this.moviesService.getGenres().subscribe(genres =>{
      this.genres = genres
    })
  }

  genreSelected(genre : {}){
      this.newItemEvent.emit(genre)
  }

}
