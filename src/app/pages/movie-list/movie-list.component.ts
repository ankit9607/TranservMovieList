import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie/movie.service';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.sass']
})
export class MovieListComponent implements OnInit {

  movies : Movie[];
  constructor(private movieService : MovieService) { 
    movieService.movieList.subscribe(data=>{
      this.movies=data;
    });
  }

  ngOnInit() {  }

}
