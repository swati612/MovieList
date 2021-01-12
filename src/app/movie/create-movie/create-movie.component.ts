import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormArray,
  FormBuilder,
  FormControl,
  Validators,
  NgForm,
} from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.services';
@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.scss']
})
export class CreateMovieComponent implements OnInit {
  createMovieForm: any;
  movieId: any;
  moviesAll: any;
  moviesAllCopy: any;

  constructor(private fb: FormBuilder,
     private route: Router,
     private activate: ActivatedRoute,
     private _service: ServiceService) { }

  ngOnInit(): void {
    console.log("hello create movie")
    this.createMovieForm = this.initcreateMovieForm();

    this.activate.params.subscribe((params) => {
      this.movieId = params["id"];
      console.log(this.movieId)
    })

    this.patchavalue();
  }
  initcreateMovieForm() {
    return this.fb.group({
      name: [
        "",
        [
          Validators.required,
          Validators.pattern("^[a-zA-Z ]*$"),
        ],
      ],
      genre: ["", [Validators.required]],
      image: ["", []],
      actor: ["", [Validators.required]],
      id: ["", [Validators.required, Validators.pattern("^[0-9]*$"),]],
      releaseYear: [
        "",
        [
          Validators.required,
          Validators.pattern("^[0-9]*$"),
          Validators.minLength(4),
          Validators.maxLength(4),
        ],
      ],
     
    });
  }
  onSubmit(){
if(this.movieId){
  console.log(this.createMovieForm.value)
  let data= JSON.parse(localStorage.getItem('movielocal')|| '{}')
  for (let i in data)
  {
    if(this.createMovieForm.value.id==data[i].id){
       data[i].id=this.createMovieForm.value.id
       data[i].genre=this.createMovieForm.value.genre
       data[i].name=this.createMovieForm.value.name
       data[i].releaseYear=this.createMovieForm.value.releaseYear
     }
  }
  localStorage.setItem('movielocal', JSON.stringify(data));
  alert("movie details updated")
   this.route.navigate(["movie", this.movieId]);
}
else{
  var storedNames = JSON.parse(localStorage.getItem("movielocal")|| '{}');
  storedNames.push(this.createMovieForm.value)
   console.log(storedNames)
   localStorage.setItem("movielocal",JSON.stringify(storedNames));
 alert("New movie added")
     this.route.navigate(['movie'])
   }
}
  
  back(){
    this.route.navigate(['movie'])
  }
  patchavalue() {
    if (this.movieId) {
      //this.moviesAll = this._service.getMovies()
      //this.moviesAllCopy = this._service.getMovies()
      this.moviesAll = JSON.parse(localStorage.getItem("movielocal")|| '{}');
      this.moviesAllCopy = JSON.parse(localStorage.getItem("movielocal")|| '{}');
      console.log(this.moviesAll)
      console.log(this.moviesAllCopy)
      this.moviesAll =  this.moviesAllCopy.filter((item: any)=>{
          return item.id == this.movieId
         
      })
      console.log(...this.moviesAll)
      this.createMovieForm.patchValue(...this.moviesAll)
      console.log(this.createMovieForm.value)
    }
    else{
      this.createMovieForm.controls["image"].patchValue("https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SY1000_CR0,0,675,1000_AL_.jpg")
      
      
    }
  }

}
