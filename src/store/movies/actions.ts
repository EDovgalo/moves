import {
  ADD_MOVIE_SUCCESS,
  CLEAR_DELETE_MOVIE_ID,
  CLEAR_SELECTED_MOVIE,
  DELETE_MOVIE_SUCCESS,
  EDIT_MOVIE_SUCCESS,
  GET_MOVIE_BY_ID_SUCCESS,
  GET_MOVIES_SUCCESS,
  IQueryParams,
  MovieActionTypes,
  MOVIES_ERROR,
  SELECT_MOVIE,
  SET_DELETE_MOVIE_ID,
  SET_EDIT_MOVIE,
  SHOW_SPINNER,
} from './types';
import { Movie } from '../../models/movie.model';

const URL = 'http://localhost:4000/movies';

const showSpinnerAction = (): MovieActionTypes => ({
  type: SHOW_SPINNER,
});

const getMoviesSuccessAction = (movies: Movie[], queryParams: IQueryParams): MovieActionTypes => ({
  type: GET_MOVIES_SUCCESS,
  payload: {
    movies,
    queryParams,
  },
});

const deleteMovieSuccessAction = (id: number): MovieActionTypes => ({
  type: DELETE_MOVIE_SUCCESS,
  payload: id,
});

const editMovieSuccessAction = (movie: Movie): MovieActionTypes => ({
  type: EDIT_MOVIE_SUCCESS,
  payload: movie,
});

const addMovieSuccessAction = (movie: Movie): MovieActionTypes => ({
  type: ADD_MOVIE_SUCCESS,
  payload: movie,
});

const setErrorAction = (error: Error): MovieActionTypes => ({
  type: MOVIES_ERROR,
  payload: error,
});

const getMovieByIdSuccess = (movie: Movie): MovieActionTypes => ({
  type: GET_MOVIE_BY_ID_SUCCESS,
  payload: movie,
});

async function status(res) {
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.messages);
  }
  const contentType = res.headers.get('content-type');
  let result = Promise.resolve({ data: {} as any } as any);
  if (contentType) {
    result = await res.json();
  }
  return result;
}

export const fetchMovies = params => dispatch => {
  const queryParams = new URLSearchParams(params);
  dispatch(showSpinnerAction());
  return fetch(`${URL}?${queryParams}`)
    .then((resp: Response) => status(resp))
    .then(result => dispatch(getMoviesSuccessAction(result.data, params)))
    .catch((error: Error) => dispatch(setErrorAction(error)));
};

export const getMovieById = id => dispatch => {
  dispatch(showSpinnerAction());
  return fetch(`${URL}/${id}`)
    .then((resp: Response) => status(resp))
    .then(result => dispatch(getMovieByIdSuccess(result.data[0])))
    .catch((error: Error) => dispatch(setErrorAction(error)));
};

export const deleteMovie = (id: number) => dispatch => {
  dispatch(showSpinnerAction());
  return fetch(`${URL}/${id}`, {
    method: 'delete',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((resp: Response) => status(resp))
    .then(() => {
      dispatch(deleteMovieSuccessAction(id));
    })
    .catch((error: Error) => dispatch(setErrorAction(error)));
};

export const editMovie = (movie: Movie) => dispatch => {
  dispatch(showSpinnerAction());
  return fetch(`${URL}`, {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...movie,
      id: +movie.id,
    }),
  })
    .then((resp: Response) => status(resp))
    .then(result => {
      dispatch(editMovieSuccessAction(result));
    })
    .catch((error: Error) => dispatch(setErrorAction(error)));
};

export const addMovie = (movie: Movie) => dispatch => {
  dispatch(showSpinnerAction());
  const newMovie = { ...movie };
  delete newMovie.id;
  return fetch(URL, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newMovie),
  })
    .then((resp: Response) => status(resp))
    .then(result => {
      dispatch(addMovieSuccessAction(result));
    })
    .catch((error: Error) => dispatch(setErrorAction(error)));
};

export const clearDeleteMovieId = () : MovieActionTypes => ({
  type: CLEAR_DELETE_MOVIE_ID,
});

export const setDeleteMovieId = (id: number) : MovieActionTypes => ({
  type: SET_DELETE_MOVIE_ID,
  payload: id,
});

export const setEditMovie = (movie: Movie) : MovieActionTypes => ({
  type: SET_EDIT_MOVIE,
  payload: movie,
});

export const selectMovie = (movie: Movie) : MovieActionTypes => ({
  type: SELECT_MOVIE,
  payload: movie,
});

export const clearEditedMovie = () : MovieActionTypes => ({
  type: CLEAR_SELECTED_MOVIE,
});
