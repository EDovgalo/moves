import { Movie } from '../../models/movie.model';

export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS';
export const MOVIES_ERROR = 'MOVIES_ERROR';
export const DELETE_MOVIE = 'DELETE_MOVIE';
export const DELETE_MOVIE_SUCCESS = 'DELETE_MOVIE_SUCCESS';
export const EDIT_MOVIE = 'EDIT_MOVIE';
export const EDIT_MOVIE_SUCCESS = 'EDIT_MOVIE_SUCCESS';
export const FILTER_BY_GENRES = 'FILTER_BY_GENRES';
export const FILTER_BY_GENRES_SUCCESS = 'FILTER_BY_GENRES_SUCCESS';
export const SORT_BY = 'SORT_BY';
export const SORT_BY_SUCCESS = 'SORT_BY_SUCCESS';
export const ADD_MOVIE = 'ADD_MOVIE';
export const ADD_MOVIE_SUCCESS = 'ADD_MOVIE_SUCCESS';

interface IGetMovieAction {
  type: typeof GET_MOVIES,
}

interface IGetMovieSuccessAction {
  type: typeof GET_MOVIES_SUCCESS,
  payload: Movie[]
}

interface IDeleteMovieAction {
  type: typeof DELETE_MOVIE,
}

interface IDeleteMovieSuccessAction {
  type: typeof DELETE_MOVIE_SUCCESS,
  payload: number
}

interface IEditMovieAction {
  type: typeof EDIT_MOVIE,
}

interface IEditMovieSuccessAction {
  type: typeof EDIT_MOVIE_SUCCESS,
  payload: Movie
}

interface ISortByAction {
  type: typeof SORT_BY,
}

interface ISortBySuccessAction {
  type: typeof SORT_BY_SUCCESS,
  payload: Movie []
}

interface IFilterByGenresAction {
  type: typeof FILTER_BY_GENRES,
}

interface IFilterByGenresSuccessAction {
  type: typeof FILTER_BY_GENRES_SUCCESS,
  payload: Movie[]
}

interface IErrorAction {
  type: typeof MOVIES_ERROR,
  payload: Error | string
}

interface IAddMovieAction {
  type: typeof ADD_MOVIE
}

interface IAddMovieSuccess {
  type: typeof ADD_MOVIE_SUCCESS,
  payload: Movie
}

export type MovieActionTypes = IGetMovieAction | IGetMovieSuccessAction |
  IErrorAction | IDeleteMovieAction | IDeleteMovieSuccessAction | IEditMovieAction |
  IEditMovieSuccessAction | IFilterByGenresAction | IFilterByGenresSuccessAction |
  ISortByAction | ISortBySuccessAction | IAddMovieAction | IAddMovieSuccess

export interface IMoviesState {
  movies: Movie[],
  error: Error | string,
  isLoaded: boolean,
  isLoading: boolean
}
