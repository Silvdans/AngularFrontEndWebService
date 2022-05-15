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
  event : boolean = false;
  ngOnInit(): void {
  }

  receiveGenre(genreSelected: {}){
    this.genre = genreSelected
  }
  receiveFavorites(event:any){
    this.event = event
  }


}
