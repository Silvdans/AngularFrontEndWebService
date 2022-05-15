import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';
import { allUsers, USER_CONTEXT_DEV } from '../../../../user_context.conf';
@Component({
  selector: 'app-detail-film',
  templateUrl: './detail-film.component.html',
  styleUrls: ['./detail-film.component.css']
})
export class DetailFilmComponent implements OnInit {
  id : string | null = "";
  movie : any
  userList : string[] = allUsers;
  user = {}
  selectedUser: string = "";
  base_url = 'https://image.tmdb.org/t/p/original'
  constructor(private moviesService : MoviesService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.moviesService.getMovie(this.id).subscribe(movie =>{
      this.movie = movie;
    })
  }
  addFavorite(){
    this.moviesService.updateUser({'favorites': [this.id]},USER_CONTEXT_DEV.usersCurrentId).subscribe(user => {

    })
  }
  addBlacklist(){
    this.moviesService.updateUser({'blacklist': [this.id]},USER_CONTEXT_DEV.usersCurrentId).subscribe(user =>{

    })
  }
  recomAUser(user_recommended : string){
    this.moviesService.updateUser({'recom':{'user_id':USER_CONTEXT_DEV.usersCurrentId, 'movie_id':this.id}},this.selectedUser).subscribe(user=> {

    });
  }
  public updateMovie(){
    this.moviesService.updateMovie(this.id, {user_id:USER_CONTEXT_DEV.usersCurrentId}).subscribe(movie => {
      this.movie = movie;
    })
  }

}
