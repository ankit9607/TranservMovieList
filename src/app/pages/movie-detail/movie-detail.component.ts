import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.sass']
})
export class MovieDetailComponent implements OnInit {

  constructor(private route : ActivatedRoute, private movieService : MovieService) { }

  public movie : Movie;
  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.movieService.movieList.subscribe(movies=>{
        this.movie=movies[params['movieIndex']];
      });
    });
  }

}
