import {
  ADD_MOVIE_SUCCESS,
  DELETE_MOVIE_SUCCESS,
  EDIT_MOVIE_SUCCESS,
  FILTER_BY_GENRES_SUCCESS,
  GET_MOVIES_SUCCESS,
  MovieActionTypes,
  MOVIES_ERROR,
  SEARCH_MOVIES_SUCCESS,
  SHOW_SPINNER,
} from './types';
import { Movie } from '../../models/movie.model';

const URL = 'http://localhost:4000/movies';

const showSpinnerAction = (): MovieActionTypes => ({
  type: SHOW_SPINNER,
});

const getMoviesSuccessAction = (movies: Movie[]): MovieActionTypes => ({
  type: GET_MOVIES_SUCCESS,
  payload: movies,
});

const deleteMovieSuccessAction = (id: number): MovieActionTypes => ({
  type: DELETE_MOVIE_SUCCESS,
  payload: id,
});

const editMovieSuccessAction = (movie: Movie): MovieActionTypes => ({
  type: EDIT_MOVIE_SUCCESS,
  payload: movie,
});

const filterByGenresSuccessAction = (movies: Movie[]): MovieActionTypes => ({
  type: FILTER_BY_GENRES_SUCCESS,
  payload: movies,
});

const sortBySuccessAction = (movies: Movie[]): MovieActionTypes => ({
  type: FILTER_BY_GENRES_SUCCESS,
  payload: movies,
});

const addMovieSuccessAction = (movie: Movie): MovieActionTypes => ({
  type: ADD_MOVIE_SUCCESS,
  payload: movie,
});

const searchMovieSuccessAction = (movies: Movie[]): MovieActionTypes => ({
  type: SEARCH_MOVIES_SUCCESS,
  payload: movies,
});

const setErrorAction = (error: Error): MovieActionTypes => ({
  type: MOVIES_ERROR,
  payload: error,
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

export const fetchMovies = () => dispatch => {
  dispatch(showSpinnerAction());
  fetch(URL)
    .then((resp: Response) => status(resp))
    .then(result => dispatch(getMoviesSuccessAction(result.data)))
    .catch((error: Error) => dispatch(setErrorAction(error)));
};

export const deleteMovie = (id: number) => dispatch => {
  dispatch(showSpinnerAction());
  fetch(`${URL}/${id}`, {
    method: 'delete',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((resp: Response) => status(resp))
    .then(() => {
      dispatch(deleteMovieSuccessAction(id));
    })
    .catch((error: Error) => dispatch(setErrorAction(error)));
};

export const searchMovie = (search: string) => dispatch => {
  const queryParams = `?search=${search}`;
  dispatch(showSpinnerAction());
  fetch(URL + queryParams, {
    method: 'get',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((resp: Response) => status(resp))
    .then(result => {
      dispatch(searchMovieSuccessAction(result.data));
    })
    .catch((error: Error) => dispatch(setErrorAction(error)));
};

export const editMovie = (movie: Movie) => dispatch => {
  dispatch(showSpinnerAction());
  fetch(`${URL}`, {
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

export const filterByGenres = (genres: string[]) => dispatch => {
  dispatch(showSpinnerAction());
  const queryParams = Array.isArray(genres) && genres[0] ? `?filter=${genres.join(',')}` : '';
  fetch(`${URL}${queryParams}`, {})
    .then((resp: Response) => resp.json())
    .then(result => dispatch(filterByGenresSuccessAction(result.data)))
    .catch((error: Error) => dispatch(setErrorAction(error)));
};

export const SortBy = (sortBy: string) => dispatch => {
  dispatch(showSpinnerAction());
  const queryParams = sortBy ? `?sortBy=${sortBy}&sortOrder=asc` : '';
  fetch(`${URL}${queryParams}`, {})
    .then((resp: Response) => resp.json())
    .then(result => dispatch(sortBySuccessAction(result.data)))
    .catch((error: Error) => dispatch(setErrorAction(error)));
};

export const addMovie = (movie: Movie) => dispatch => {
  dispatch(showSpinnerAction());
  const newMovie = { ...movie };
  delete newMovie.id;
  fetch(URL, {
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
