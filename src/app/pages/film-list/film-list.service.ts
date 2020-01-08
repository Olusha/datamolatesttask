import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { FILM_LIST } from './film-list.mock';
import { Film, FilmListFilter, TableData } from './film-list.interface';
import * as moment from 'moment';
import { ORDER_DIRECTION } from './film-list.constants';
import { isString } from 'util';

@Injectable()
export class FilmListService {
  filmList = FILM_LIST;
  constructor(private http: HttpClient) {}

  getFilmList(filters: FilmListFilter): Observable<TableData> {
    return (of(this.getFilmListWIthFilters(filters)));
  }

  getFilmListWIthFilters(filters: FilmListFilter): TableData {
    const filmsWithSearch = this.filmList.filter(film => film.name.toLowerCase().includes(filters.search) || film.network.toLowerCase().includes(filters.search));
    const filmsWithFilters = filmsWithSearch.filter(film => {
      const year = moment(film.premiere).year();
      const filmHasExactGenre = filters.filters.genreId ? film.genresId.includes(filters.filters.genreId) : true;
      const filmAtExactYear = filters.filters.premiereYear ? year === filters.filters.premiereYear : true;
      return filmHasExactGenre && filmAtExactYear;
    });

    const sortedList = sortList(filmsWithFilters, filters.order);
    return {films: getListWithPagination(sortedList, filters.page, filters.pageSize), counter: sortedList.length};
  }

}

function getListWithPagination(list: Film[], page: number, pageSize: number): Film[] {
  const lastEntity = pageSize*page;
  const firstEntity = lastEntity - pageSize;
  return list.slice(firstEntity, lastEntity);
}

function sortList(films: Film[], order: {id: string, direction: ORDER_DIRECTION}) {
  return films.sort((filmPrev, filmNext) => {

    if (isString(filmPrev[order.id])) {
      return  compareString(filmPrev[order.id] , filmNext[order.id], order.direction);
    }

    return compareNumber(filmPrev[order.id] , filmNext[order.id], order.direction);
  });
}

function compareString(prevValue, nextValue, orderDirection) {
  if (orderDirection === ORDER_DIRECTION.ASC) {
    return prevValue > nextValue ? 1 : -1
  } else {
    return nextValue > prevValue ? 1 : -1
  }
}

function compareNumber(prevValue, nextValue, orderDirection) {
  if (orderDirection === ORDER_DIRECTION.ASC) {
    return prevValue - nextValue;
  } else {
    return nextValue - prevValue;
  }
}
