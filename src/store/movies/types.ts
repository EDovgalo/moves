import { Movie } from '../../models/movie.model';
import { ToasterMessage } from '../../models/toasterNotification.model';

export const GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS';
export const MOVIES_ERROR = 'MOVIES_ERROR';
export const DELETE_MOVIE_SUCCESS = 'DELETE_MOVIE_SUCCESS';
export const EDIT_MOVIE_SUCCESS = 'EDIT_MOVIE_SUCCESS';
export const SHOW_SPINNER = 'SHOW_SPINNER';
export const ADD_MOVIE_SUCCESS = 'ADD_MOVIE_SUCCESS';
export const UPDATE_QUERY_PARAMS = 'UPDATE_QUERY_PARAMS';

interface IShowSpinner {
  type: typeof SHOW_SPINNER
}

export interface IQueryParams {
  filter: string,
  sortBy: string,
  search: string,
  searchBy: string
}

interface IGetMovieSuccessAction {
  type: typeof GET_MOVIES_SUCCESS,
  payload: {
    movies: Movie[],
    queryParams: IQueryParams
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

export type MovieActionTypes = IShowSpinner | IGetMovieSuccessAction |
  IErrorAction | IDeleteMovieSuccessAction | IEditMovieSuccessAction |
  IAddMovieSuccess | IUpdateQueryParams

export interface IMoviesState {
  movies: Movie[],
  error: Error | string,
  isLoaded: boolean,
  isLoading: boolean
  notificationMessage: ToasterMessage,
  queryParams: IQueryParams
}
