import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { FilmListService } from './film-list.service';
import { TableData } from './film-list.interface';
import { Observable } from 'rxjs';
import { FilmListFilters } from './film-list.constants';

@Injectable()
export class FilmListResolver implements Resolve<TableData>{
  constructor(private filmListService: FilmListService) {}

  resolve(): Observable<TableData> {
    return this.filmListService.getFilmList(new FilmListFilters())
  }
}
