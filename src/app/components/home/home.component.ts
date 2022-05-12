import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() { }
  genre = {}
  ngOnInit(): void {
  }

  receiveGenre(genre_selected: {}){
    this.genre = genre_selected
  }

}
