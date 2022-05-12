import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterFilmComponent } from './components/filter-film/filter-film.component';
import { FilmListComponent } from './components/film-list/film-list.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsComponent } from './components/components.component';
import { DetailFilmComponent } from './components/detail-film/detail-film.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterFilmComponent,
    FilmListComponent,
    HeaderComponent,
    HomeComponent,
    ComponentsComponent,
    DetailFilmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
