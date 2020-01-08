import { Film } from './film-list.interface';
import { GENRES_ID } from './film-list.constants';
import * as moment from 'moment';

export const FILM_LIST: Film[] = [
  {
    id: 1,
    name: 'Film 1',
    season: 7,
    network: 'AMC, Netflix',
    premiere: moment('2014-2-10', 'YYYY-MM-DD').format('YYYY-MM-DD'),
    genresId: [GENRES_ID.DRAMA, GENRES_ID.HORROR]
  },
  {
    id: 2,
    name: 'Film 2',
    season: 2,
    network: ' AMC',
    premiere: moment('2014-1-10', 'YYYY-MM-DD').format('YYYY-MM-DD'),
    genresId: [GENRES_ID.TRAGEDY, GENRES_ID.DARK_COMEDY]
  },
  {
    id: 3,
    name: 'This film',
    season: 3,
    network: 'Netflix',
    premiere: moment('2017-2-10', 'YYYY-MM-DD').format('YYYY-MM-DD'),
    genresId: [GENRES_ID.TRAGEDY, GENRES_ID.HORROR]
  },
  {
    id: 4,
    name: 'J film',
    season: 3,
    network: 'Netflix',
    premiere: moment('2015-2-10', 'YYYY-MM-DD').format('YYYY-MM-DD'),
    genresId: [GENRES_ID.DRAMA, GENRES_ID.HORROR]
  },
  {
    id: 5,
    name: '01 film',
    season: 3,
    network: 'AMC',
    premiere: moment('2014-2-10', 'YYYY-MM-DD').format('YYYY-MM-DD'),
    genresId: [GENRES_ID.DARK_COMEDY, GENRES_ID.HORROR]
  },
  {
    id: 6,
    name: 'NA film',
    season: 3,
    network: 'ATM',
    premiere: moment('2018-2-10', 'YYYY-MM-DD').format('YYYY-MM-DD'),
    genresId: [GENRES_ID.CRIME, GENRES_ID.HORROR]
  }, {
    id: 7,
    name: 'N film',
    season: 3,
    network: 'ATM',
    premiere: moment('2014-2-10', 'YYYY-MM-DD').format('YYYY-MM-DD'),
    genresId: [GENRES_ID.TRAGEDY, GENRES_ID.HORROR]
  }, {
    id: 8,
    name: '1A film',
    season: 3,
    network: 'ATM',
    premiere: moment('2015-2-10', 'YYYY-MM-DD').format('YYYY-MM-DD'),
    genresId: [GENRES_ID.TRAGEDY, GENRES_ID.HORROR]
  }, {
    id: 9,
    name: 'AB film',
    season: 5,
    network: 'ATM',
    premiere: moment('2019-2-10', 'YYYY-MM-DD').format('YYYY-MM-DD'),
    genresId: [GENRES_ID.TRAGEDY, GENRES_ID.DARK_COMEDY]
  }, {
    id: 10,
    name: 'B film',
    season: 1,
    network: 'ATM',
    premiere: moment('2016-2-10', 'YYYY-MM-DD').format('YYYY-MM-DD'),
    genresId: [GENRES_ID.DRAMA, GENRES_ID.HORROR]
  }, {
    id: 11,
    name: 'A film',
    season: 9,
    network: 'ATM',
    premiere: moment('2017-2-10', 'YYYY-MM-DD').format('YYYY-MM-DD'),
    genresId: [GENRES_ID.TRAGEDY, GENRES_ID.CRIME]
  }, {
    id: 12,
    name: 'C film',
    season: 2,
    network: 'ATM',
    premiere: moment('2017-2-10', 'YYYY-MM-DD').format('YYYY-MM-DD'),
    genresId: [GENRES_ID.TRAGEDY, GENRES_ID.CRIME]
  },
];

