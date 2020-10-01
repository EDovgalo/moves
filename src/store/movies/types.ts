import { Movie } from '../../models/movie.model';
import { ToasterMessage } from '../../models/toasterNotification.model';

export const GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS';
export const MOVIES_ERROR = 'MOVIES_ERROR';
export const DELETE_MOVIE_SUCCESS = 'DELETE_MOVIE_SUCCESS';
export const EDIT_MOVIE_SUCCESS = 'EDIT_MOVIE_SUCCESS';
export const FILTER_BY_GENRES_SUCCESS = 'FILTER_BY_GENRES_SUCCESS';
export const SORT_BY_SUCCESS = 'SORT_BY_SUCCESS';
export const SHOW_SPINNER = 'SHOW_SPINNER';
export const ADD_MOVIE_SUCCESS = 'ADD_MOVIE_SUCCESS';
export const SEARCH_MOVIES_SUCCESS = 'SEARCH_MOVIES_SUCCESS';
export const SHOW_NOTIFICATION_MESSAGE = 'SHOW_NOTIFICATION_MESSAGE';
export const CLEAR_DELETE_MOVIE_ID = 'CLEAR_DELETE_MOVIE_ID';
export const SET_DELETE_MOVIE_ID = 'SET_DELETE_MOVIE_ID';
export const CLEAR_SELECTED_MOVIE = 'CLEAR_SELECTED_MOVIE';
export const SELECT_MOVIE = 'SELECT_MOVIE';

interface IShowSpinner {
  type: typeof SHOW_SPINNER
}
interface IGetMovieSuccessAction {
  type: typeof GET_MOVIES_SUCCESS,
  payload: Movie[]
}

interface IDeleteMovieSuccessAction {
  type: typeof DELETE_MOVIE_SUCCESS,
  payload: number
}

interface IEditMovieSuccessAction {
  type: typeof EDIT_MOVIE_SUCCESS,
  payload: Movie
}

interface ISortBySuccessAction {
  type: typeof SORT_BY_SUCCESS,
  payload: Movie []
}

interface IFilterByGenresSuccessAction {
  type: typeof FILTER_BY_GENRES_SUCCESS,
  payload: Movie[]
}

interface IErrorAction {
  type: typeof MOVIES_ERROR,
  payload: Error | string
}

interface IAddMovieSuccess {
  type: typeof ADD_MOVIE_SUCCESS,
  payload: Movie
}

interface ISearchSuccessAction {
  type: typeof SEARCH_MOVIES_SUCCESS,
  payload: Movie[]
}

interface IClearDeleteMovieId {
  type: typeof CLEAR_DELETE_MOVIE_ID,
}

interface ISetDeleteMovieId {
  type: typeof SET_DELETE_MOVIE_ID,
  payload: number
}

interface ISelectMovie {
  type: typeof SELECT_MOVIE,
  payload: Movie
}

interface IClearSelectedMovie {
  type: typeof CLEAR_SELECTED_MOVIE,
}

export type MovieActionTypes = IShowSpinner | IGetMovieSuccessAction |
  IErrorAction | IDeleteMovieSuccessAction | IEditMovieSuccessAction |
  IFilterByGenresSuccessAction | ISortBySuccessAction | IAddMovieSuccess |
  ISearchSuccessAction | IClearDeleteMovieId | ISetDeleteMovieId | ISelectMovie |
  IClearSelectedMovie;

export interface IMoviesState {
  movies: Movie[],
  error: Error | string,
  isLoaded: boolean,
  isLoading: boolean
  notificationMessage: ToasterMessage,
  deleteMovieId: number,
  selectedMovie: Movie,
  foundMovies: Movie []
}
