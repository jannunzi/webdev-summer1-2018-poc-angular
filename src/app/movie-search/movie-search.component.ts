import { Component, OnInit } from '@angular/core';
import {OmdapiServiceClientJs} from "../services/omdapi.service.client.js";
import {MovieServiceClient} from "../services/movie.service.client";

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {

  constructor(private movieService: MovieServiceClient,
              private service: OmdapiServiceClientJs) { }

  keyword;
  details = {};
  movies = [];
  searchMovie(keyword) {
    this.service.findMoviesByKeyword(keyword)
      .then(response => this.movies = response.Search);
  }

  findMovieDetails(movie) {
    this.service.findMovieDetails(movie.imdbID)
      .then(details => this.details = details);
  }

  likes(movie) {
    this.movieService.likesMovie(movie);
  }

  ngOnInit() {
  }

}
