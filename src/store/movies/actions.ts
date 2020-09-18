import {
  ADD_MOVIE,
  ADD_MOVIE_SUCCESS,
  DELETE_MOVIE,
  DELETE_MOVIE_SUCCESS,
  EDIT_MOVIE,
  EDIT_MOVIE_SUCCESS,
  FILTER_BY_GENRES,
  FILTER_BY_GENRES_SUCCESS,
  GET_MOVIES,
  GET_MOVIES_SUCCESS,
  MOVIES_ERROR,
  MovieActionTypes,
} from './types';
import { Movie } from '../../models/movie.model';

const URL = 'http://localhost:4000/movies';

const getMoviesAction = (): MovieActionTypes => ({
  type: GET_MOVIES,
});

const getMoviesSuccessAction = (movies: Movie[]): MovieActionTypes => ({
  type: GET_MOVIES_SUCCESS,
  payload: movies,
});

const deleteMovieAction = (): MovieActionTypes => ({
  type: DELETE_MOVIE,
});

const deleteMovieSuccessAction = (id: number): MovieActionTypes => ({
  type: DELETE_MOVIE_SUCCESS,
  payload: id,
});

const editMovieAction = (): MovieActionTypes => ({
  type: EDIT_MOVIE,
});

const editMovieSuccessAction = (movie: Movie): MovieActionTypes => ({
  type: EDIT_MOVIE_SUCCESS,
  payload: movie,
});

const filterByGenresAction = (): MovieActionTypes => ({
  type: FILTER_BY_GENRES,
});

const filterByGenresSuccessAction = (movies: Movie[]): MovieActionTypes => ({
  type: FILTER_BY_GENRES_SUCCESS,
  payload: movies,
});

const SortByAction = (): MovieActionTypes => ({
  type: FILTER_BY_GENRES,
});

const SortBySuccessAction = (movies: Movie[]): MovieActionTypes => ({
  type: FILTER_BY_GENRES_SUCCESS,
  payload: movies,
});

const AddMovieAction = (): MovieActionTypes => ({
  type: ADD_MOVIE,
});

const AddMovieSuccessAction = (movie: Movie): MovieActionTypes => ({
  type: ADD_MOVIE_SUCCESS,
  payload: movie,
});

const setErrorAction = (error: Error): MovieActionTypes => ({
  type: MOVIES_ERROR,
  payload: error,
});

export const fetchMovies = () => dispatch => {
  dispatch(getMoviesAction());
  fetch(URL)
    .then((resp: Response) => resp.json())
    .then(result => dispatch(getMoviesSuccessAction(result.data)))
    .catch((error: Error) => dispatch(setErrorAction(error)));
};

export const deleteMovie = (id: number) => dispatch => {
  dispatch(deleteMovieAction());
  fetch(`${URL}/${id}`, {
    method: 'delete',
  }).then(() => dispatch(deleteMovieSuccessAction(id)))
    .catch((error: Error) => dispatch(setErrorAction(error)));
};

export const editMovie = (movie: Movie) => dispatch: Dispatch  => {
  dispatch(editMovieAction());
  fetch(`${URL}`, {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...movie,
      id: +movie.id,
    }),
  })
    .then((resp: Response) => resp.json())
    .then(result => dispatch(editMovieSuccessAction(result)))
    .catch((error: Error) => dispatch(setErrorAction(error)));
};

export const filterByGenres = (genres: string[]) => dispatch => {
  dispatch(filterByGenresAction());
  const queryParams = Array.isArray(genres) && genres[0] ? `?filter=${genres.join(',')}` : '';
  fetch(`${URL}${queryParams}`, {})
    .then((resp: Response) => resp.json())
    .then(result => dispatch(filterByGenresSuccessAction(result.data)))
    .catch((error: Error) => dispatch(setErrorAction(error)));
};

export const SortBy = (sortBy: string) => dispatch => {
  dispatch(SortByAction());
  const queryParams = sortBy ? `?sortBy=${sortBy}&sortOrder=asc` : '';
  fetch(`${URL}${queryParams}`, {})
    .then((resp: Response) => resp.json())
    .then(result => dispatch(SortBySuccessAction(result.data)))
    .catch((error: Error) => dispatch(setErrorAction(error)));
};

export const addMovie = (movie: Movie) => dispatch => {
  dispatch(AddMovieAction());
  const newMovie = { ...movie };
  delete newMovie.id;
  fetch(URL, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newMovie),
  }).then((resp: Response) => resp.json())
    .then(result => dispatch(AddMovieSuccessAction(result)))
    .catch((error: Error) => dispatch(setErrorAction(error)));
};
