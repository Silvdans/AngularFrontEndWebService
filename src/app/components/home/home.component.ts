import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() { }
  genre = {}
  movie : number = 0
  ngOnInit(): void {
  }

  receiveGenre(genreSelected: {}){
    this.genre = genreSelected
  }
  receiveMovie(movieIdSelected : number){
    this.movie = movieIdSelected;
  }

}
