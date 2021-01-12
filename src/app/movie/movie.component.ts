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
  movie1: any;
  constructor(  private route: Router,
     private _service: ServiceService) { }

  ngOnInit(): void {
    console.log("hello")

        this.movies = this._service.getMovies()
        let arMoviesData=localStorage.getItem("movielocal");
       //console.log(arMoviesData)
        if(arMoviesData== null || arMoviesData==""){
            localStorage.setItem("movielocal",JSON.stringify(this.movies)); 
         this.movie1 = JSON.parse(localStorage.getItem("movielocal")|| '{}');
         console.log("service")
        }else{
          console.log("local")
          this.movie1 = JSON.parse(localStorage.getItem("movielocal")|| '{}');
        }
        
       
  }
  
  moviedetail(movie: any){
    this.route.navigate(["movie", movie.id]);
   // this.route.navigate([`movie/${movie.id}/moviedetail`]);
   console.log(movie)
  }
  moviedelete(movie: any){
   console.log(movie)
   console.log(movie)
   var storedNames = JSON.parse(localStorage.getItem("movielocal")|| '{}');
   console.log(storedNames)
   if(confirm('do yo want to delte this?'))
   {
     storedNames.splice(movie,1);
     localStorage.setItem('movielocal', JSON.stringify(storedNames));
     console.log(storedNames)
     this.ngOnInit()
}
   
  }
  addMovie(){
    this.route.navigate(["create"]);

  }
  
}
