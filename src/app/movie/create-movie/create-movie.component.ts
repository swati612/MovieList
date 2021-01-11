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
      image: ["", [Validators.required]],
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
    console.log(this.createMovieForm.value)
  }
  back(){
    this.route.navigate(['movie'])
  }
  patchavalue() {
    if (this.movieId) {
      this.moviesAll = this._service.getMovies()
      this.moviesAllCopy = this._service.getMovies()
      console.log(this.moviesAll)
      console.log(this.moviesAllCopy)
      this.moviesAll =  this.moviesAllCopy.filter((item: any)=>{
          return item.id == this.movieId
         
      })
      console.log(...this.moviesAll)
      this.createMovieForm.patchValue(...this.moviesAll)
      console.log(this.createMovieForm.value)
    }
  }

}
