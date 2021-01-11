import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MovieComponent } from './movie/movie.component';
import { MovieDetailComponent } from './movie/movie-detail/movie-detail.component';
import { ServiceService } from './service.services';
import { CreateMovieComponent } from './movie/create-movie/create-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MovieComponent,
    MovieDetailComponent,
    CreateMovieComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
