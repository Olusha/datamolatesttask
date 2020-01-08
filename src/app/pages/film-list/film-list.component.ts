import { Component, OnInit } from '@angular/core';
import { FilmListFilter, Option, TableData, TableHeader } from './film-list.interface';
import { BehaviorSubject } from 'rxjs';
import {
  FilmListFilters,
  GENRE_OPTIONS,
  GENRES_COLOR,
  GENRES_NAME, ORDER_DIRECTION,
  ORDER_ENTITY, PAGINATION_CONFIG,
} from './film-list.constants';
import { ActivatedRoute } from '@angular/router';
import { FilmListService } from './film-list.service';
import { switchMap } from 'rxjs/operators';
import * as moment from 'moment';

@Component({
  selector: 'film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent implements OnInit{
  filmListData: TableData = {
    films: [],
    counter: 0,
  };
  genreNameMap = GENRES_NAME;
  genreColorMap = GENRES_COLOR;
  PAGE_SIZE_OPTIONS = [5, 10, 25];

  PAGINATION_CONFIG = PAGINATION_CONFIG;

  ORDER_DIRECTION = ORDER_DIRECTION;

  filters$ = new BehaviorSubject<FilmListFilter>(new FilmListFilters());
  search = this.filters$.getValue().search;

  genreOptions: Option[] = [{id: null, name: 'Genre'}, ...GENRE_OPTIONS];
  yearOptions: Option[] = [];

  tableHeaders: TableHeader[] = [
    {id: ORDER_ENTITY.NAME, label: 'Name' },
    {id: ORDER_ENTITY.SEASON_QUANTITY, label: 'Season' },
    {id: ORDER_ENTITY.NETWORK, label: 'Network' },
    {id: ORDER_ENTITY.PREMIERE, label: 'Premiere' },
  ];

  selectedGenreId = null;

  constructor(private activatedRoute: ActivatedRoute, private filmListService: FilmListService) {
  }

  ngOnInit() {
    this.filmListData = this.activatedRoute.snapshot.data.filmList;
    this.yearOptions = [{id: null, name: 'Premiere Year'}, ...this.getYearOptions()];

    this.filters$.pipe(switchMap(filter => this.filmListService.getFilmList(filter)))
      .subscribe(filmList => this.filmListData = filmList);
  }

  private getYearOptions(): Option[] {
    const uniqueSet = new Set();
    this.filmListData.films.forEach(film => uniqueSet.add(moment(film.premiere).year()));
    return  (Array.from(uniqueSet) as number[]).sort().map(year => ({id: year, name: year.toString()}));
  }

  onSearch(text: string) {
    const filters = this.filters$.getValue();
    this.filters$.next({...filters, search: text.toLowerCase(), page: 1});
  }

  onGenreChange(genreId: number) {
    const filters = this.filters$.getValue();
    this.filters$.next({...filters, filters: {
      ...filters.filters,
        genreId: genreId,
      },
      page: 1,
    });
  }

  onYearChange(year: number) {
    const filters = this.filters$.getValue();
    this.filters$.next({...filters, filters: {
        ...filters.filters,
        premiereYear: year,
      },
      page: 1,
    });
  }

  onOrderChange(headerId: string, orderDirection: ORDER_DIRECTION) {
    const filters = this.filters$.getValue();
    this.filters$.next({...filters,
      order: {
       id: headerId, direction: orderDirection,
      }
    });
  }

  onPageChange(page: number) {
    const filters = this.filters$.getValue();
    this.filters$.next({...filters,
      page,
    });
  }

  setPageSize(pageSize: number) {
    const filters = this.filters$.getValue();
    this.filters$.next({...filters,
      pageSize,
    });
  }
}
