import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FilmListComponent } from './pages/film-list/film-list.component';
import { FilmListResolver } from './pages/film-list/film-list.resolver';
import { FilmListService } from './pages/film-list/film-list.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    FilmListComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbPaginationModule,
  ],
  providers: [FilmListResolver, FilmListService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
