import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ServiceService } from '../service.services';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  movies:any=[]
  constructor(  private route: Router,
     private _service: ServiceService) { }

  ngOnInit(): void {
    console.log("hello")
        this.movies = this._service.getMovies()
        console.log("abc")
        //localStorage.setItem("movie","abc")
        localStorage.setItem("movielocal",JSON.stringify(this.movies));
        

  }
  
  moviedetail(movie: any){
    this.route.navigate(["movie", movie.id]);
   // this.route.navigate([`movie/${movie.id}/moviedetail`]);
   console.log(movie)
  }
  moviedelete(movie: any){
   console.log(movie.id)
   console.log(movie)
   var storedNames = JSON.parse(localStorage.getItem("movielocal")|| '{}');
   console.log(storedNames)
   
  }
  addMovie(){
    this.route.navigate(["create"]);

  }
  
}
