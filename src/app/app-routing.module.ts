import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateMovieComponent } from './movie/create-movie/create-movie.component';
import { MovieDetailComponent } from './movie/movie-detail/movie-detail.component';
import { MovieComponent } from './movie/movie.component';

const routes: Routes = [
  
   { path: "", redirectTo: "movie", pathMatch: "full" },
     
      { path: "movie", component: MovieComponent },
      {
        path: "movie/:id",
        component: MovieDetailComponent, 
      },
      {
        path: "create",
        component: CreateMovieComponent,
        
      },
      {
        path: "create/:id",
        component: CreateMovieComponent,
        
      },
   
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
