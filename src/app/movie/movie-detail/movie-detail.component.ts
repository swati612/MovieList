import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.services';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  musicId:any
  moviesAll: any=[];
  moviesAllCopy: any;
  


  constructor(private activate: ActivatedRoute,
    private route: Router,
    private _service: ServiceService) { }

  ngOnInit(): void {

    this.activate.params.subscribe((params) => {
      this.musicId = params["id"];
     // console.log("params")
      //this.musicId = params;
    });

    //console.log(this.musicId)
    //this.moviesAll = this._service.getMovies()
    //this.moviesAllCopy = this._service.getMovies()
            this.moviesAll = JSON.parse(localStorage.getItem("movielocal")|| '{}');
            this.moviesAllCopy = JSON.parse(localStorage.getItem("movielocal")|| '{}');

    console.log(this.moviesAll)
    console.log(this.moviesAllCopy)
    this.moviesAll =  this.moviesAllCopy.filter((item: any)=>{
        return item.id == this.musicId
         //console.log(item.id)
         //console.log(this.musicId)
    })
    console.log(this.moviesAll)
  }
  back(){
         this.route.navigate(['movie'])
  }
  movieEdit(movie:any){
    console.log(movie)
    this.route.navigate(["create", movie.id]);
  }
  // moviedelete(movie:any){
  //   console.log(movie)
  // }
}
