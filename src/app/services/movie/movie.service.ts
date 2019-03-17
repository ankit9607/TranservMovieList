import { Injectable } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private movieAPI = "https://api.myjson.com/bins/itzx2";

  private movies = new BehaviorSubject<Movie[]>([]);
  movieList = this.movies.asObservable();

  constructor(private http : HttpClient) {
    this.getMovieList();
   }

  private getMovieList() : void {
    this.http.get(this.movieAPI).subscribe(data => {
      let temp : Movie[] = new Array<Movie>(data["movies"].length);
      for(let i:number=0;i<temp.length;i++){
        let poster : string = data["movies"][i]["Poster"];
        if(poster == undefined)poster = data["movies"][i]["Poster "];
        temp[i]=new Movie(
          data["movies"][i].Title,
          data["movies"][i].Year,
          data["movies"][i].Rated,
          data["movies"][i].Released,
          data["movies"][i].Runtime,
          data["movies"][i].Genre,
          data["movies"][i].Director,
          data["movies"][i].Writer,
          data["movies"][i].Actors,
          data["movies"][i].Plot,
          data["movies"][i].Language,
          data["movies"][i].Country,
          data["movies"][i].Awards,
          poster,
          );
      }
      this.movies.next(temp);
    });
  }
}
