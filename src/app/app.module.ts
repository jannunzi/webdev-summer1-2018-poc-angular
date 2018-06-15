import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
// import {OmdapiServiceClientJs} from "./services/omdapi.service.client.js";
import {FormsModule} from "@angular/forms";
import {MovieServiceClient} from "./services/movie.service.client";
import { FormEditorComponent } from './form-editor/form-editor.component';
import {FormServiceClient} from "./services/form.service.client";
import { FormListComponent } from './form-list/form-list.component';
import {routing} from "./app.routing";

@NgModule({
  declarations: [
    AppComponent,
    MovieSearchComponent,
    FormEditorComponent,
    FormListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    // OmdapiServiceClientJs,
    MovieServiceClient,
    FormServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
