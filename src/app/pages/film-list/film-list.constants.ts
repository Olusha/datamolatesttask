import { Option } from './film-list.interface';

export enum GENRES_ID  {
  HORROR = 1,
  DRAMA,
  TRAGEDY,
  DARK_COMEDY,
  CRIME
}

export const GENRES_NAME = {
  [GENRES_ID.DRAMA]: 'drama',
  [GENRES_ID.DARK_COMEDY]: 'dark comedy',
  [GENRES_ID.HORROR]: 'horror',
  [GENRES_ID.TRAGEDY]: 'tragedy',
  [GENRES_ID.CRIME]: 'crime',
};

export const PAGINATION_CONFIG = {
  PAGE_SIZE: 5,
  MAX_SIZE: 5,
};

export const GENRE_OPTIONS: Option[] = [
  {id: GENRES_ID.HORROR, name: GENRES_NAME[GENRES_ID.HORROR]},
  {id: GENRES_ID.DRAMA, name: GENRES_NAME[GENRES_ID.DRAMA]},
  {id: GENRES_ID.DARK_COMEDY, name: GENRES_NAME[GENRES_ID.DARK_COMEDY]},
  {id: GENRES_ID.TRAGEDY, name: GENRES_NAME[GENRES_ID.TRAGEDY]},
  {id: GENRES_ID.CRIME, name: GENRES_NAME[GENRES_ID.CRIME]},

];

export const GENRES_COLOR = {
  [GENRES_ID.DRAMA]: '#BB6AD9',
  [GENRES_ID.DARK_COMEDY]: '#828282',
  [GENRES_ID.HORROR]: '#4F4F4F',
  [GENRES_ID.TRAGEDY]: '#EB5757',
  [GENRES_ID.CRIME]: '#9B51E0'
};

export const ORDER_ENTITY = {
  NAME: 'name',
  NETWORK: 'network',
  PREMIERE: 'premiere',
  SEASON_QUANTITY: 'season',
};

export enum ORDER_DIRECTION {
  ASC,
  DESC,
}

export class FilmListFilters {
  search = '';
  page = 1;
  pageSize = PAGINATION_CONFIG.PAGE_SIZE;
  filters = {
    genreId: null,
    premiereYear: null,
  };
  order = {
    id: ORDER_ENTITY.NAME,
    direction: ORDER_DIRECTION.ASC,

  };
}
