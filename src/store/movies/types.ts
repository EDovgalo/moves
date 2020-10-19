import { Movie } from '../../models/movie.model';
import { ToasterMessage } from '../../models/toasterNotification.model';

export const GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS';
export const MOVIES_ERROR = 'MOVIES_ERROR';
export const DELETE_MOVIE_SUCCESS = 'DELETE_MOVIE_SUCCESS';
export const EDIT_MOVIE_SUCCESS = 'EDIT_MOVIE_SUCCESS';
export const SHOW_SPINNER = 'SHOW_SPINNER';
export const ADD_MOVIE_SUCCESS = 'ADD_MOVIE_SUCCESS';
export const UPDATE_QUERY_PARAMS = 'UPDATE_QUERY_PARAMS';
export const CLEAR_DELETE_MOVIE_ID = 'CLEAR_DELETE_MOVIE_ID';
export const SET_DELETE_MOVIE_ID = 'SET_DELETE_MOVIE_ID';
export const CLEAR_SELECTED_MOVIE = 'CLEAR_SELECTED_MOVIE';
export const SET_EDIT_MOVIE = 'SET_EDIT_MOVIE';
export const GET_MOVIE_BY_ID_SUCCESS = 'GET_MOVIE_BY_ID_SUCCESS';
export const SELECT_MOVIE = 'GET_MOVIE_BY_ID_SUCCESS';
export const CLEAR_MOVIES = 'CLEAR_MOVIES';
export const SET_QUERY_PARAMS = 'SET_QUERY_PARAMS';

interface IShowSpinner {
  type: typeof SHOW_SPINNER
}

export interface IQueryParams {
  filter?: string,
  search?: string,
  sortBy?: string,
  searchBy: string,
  sortOrder: string
}

interface IGetMovieSuccessAction {
  type: typeof GET_MOVIES_SUCCESS,
  payload: {
    movies: Movie[],
  }
}

interface IDeleteMovieSuccessAction {
  type: typeof DELETE_MOVIE_SUCCESS,
  payload: number
}

interface IEditMovieSuccessAction {
  type: typeof EDIT_MOVIE_SUCCESS,
  payload: Movie
}

interface IErrorAction {
  type: typeof MOVIES_ERROR,
  payload: Error | string
}

interface IAddMovieSuccess {
  type: typeof ADD_MOVIE_SUCCESS,
  payload: Movie
}

interface IUpdateQueryParams {
  type: typeof UPDATE_QUERY_PARAMS,
  payload: IQueryParams
}

interface IClearDeleteMovieId {
  type: typeof CLEAR_DELETE_MOVIE_ID,
}

interface ISetDeleteMovieId {
  type: typeof SET_DELETE_MOVIE_ID,
  payload: number
}

interface ISetEditMovie {
  type: typeof SET_EDIT_MOVIE,
  payload: Movie
}

interface IClearEditedMovie {
  type: typeof CLEAR_SELECTED_MOVIE,
}

interface IGetMovieByIdSuccess {
  type: typeof GET_MOVIE_BY_ID_SUCCESS,
  payload: Movie
}

interface ISelectMovie {
  type: typeof SELECT_MOVIE,
  payload: Movie
}

interface IClearMovies {
  type: typeof CLEAR_MOVIES,
}

interface ISetQueryParams {
  type: typeof SET_QUERY_PARAMS,
  payload: IQueryParams
}

export type MovieActionTypes = IShowSpinner | IGetMovieSuccessAction |
  IErrorAction | IDeleteMovieSuccessAction | IEditMovieSuccessAction |
  IClearDeleteMovieId | ISetDeleteMovieId | ISetEditMovie | ISelectMovie |
  IClearEditedMovie | IAddMovieSuccess | IUpdateQueryParams | IGetMovieByIdSuccess |
  IClearMovies | ISetQueryParams

export interface IMoviesState {
  movies: Movie[],
  error: Error | string,
  isLoaded: boolean,
  isLoading: boolean
  deleteMovieId: number,
  editedMovie: Movie,
  notificationMessage: ToasterMessage,
  queryParams: IQueryParams,
  selectedMovie: Movie
}
