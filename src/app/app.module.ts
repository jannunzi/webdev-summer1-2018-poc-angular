import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import {OmdapiServiceClientJs} from "./services/omdapi.service.client.js";
import {FormsModule} from "@angular/forms";
import {MovieServiceClient} from "./services/movie.service.client";

@NgModule({
  declarations: [
    AppComponent,
    MovieSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    OmdapiServiceClientJs,
    MovieServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }