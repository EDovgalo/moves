import {
  ADD_MOVIE_SUCCESS,
  DELETE_MOVIE_SUCCESS,
  EDIT_MOVIE_SUCCESS,
  GET_MOVIES_SUCCESS,
  IMoviesState,
  MovieActionTypes,
  MOVIES_ERROR,
  SHOW_SPINNER,
} from './types';
import { ToasterMessage, ToasterMessageType } from '../../models/toasterNotification.model';

const initialState: IMoviesState = {
  movies: [],
  isLoading: false,
  isLoaded: false,
  error: null,
  notificationMessage: null,
  queryParams: { filter: null, search: null, sortBy: null, searchBy: 'title' },
};

export const movieReducer = (state = initialState, action: MovieActionTypes): IMoviesState => {
  switch (action.type) {
    case SHOW_SPINNER:
      return { ...state, isLoading: true };
    case GET_MOVIES_SUCCESS: {
      const { queryParams, movies } = action.payload;
      return { ...state, isLoaded: true, isLoading: false, movies, queryParams };
    }
    case DELETE_MOVIE_SUCCESS: {
      const id = action.payload;
      const newMovies = state.movies.filter(move => move.id !== id);
      const notificationMessage = new ToasterMessage('movie has been successfully deleted');
      return { ...state, isLoading: false, movies: newMovies, notificationMessage };
    }
    case EDIT_MOVIE_SUCCESS: {
      const updatedMovie = action.payload;
      const index = state.movies.findIndex(movie => movie.id === +updatedMovie.id);
      const movies = [...state.movies];
      movies[index] = updatedMovie;
      const notificationMessage = new ToasterMessage('movie has been successfully edited');
      return { ...state, isLoading: false, movies, notificationMessage };
    }
    case ADD_MOVIE_SUCCESS: {
      const { movies } = state;
      movies.push(action.payload);
      const notificationMessage = new ToasterMessage('movie has been successfully added');
      return { ...state, isLoading: false, movies: [...movies], notificationMessage };
    }
    case MOVIES_ERROR: {
      const error = action.payload;
      const notificationMessage = new ToasterMessage('Error', ToasterMessageType.ERROR);
      return { ...state, isLoading: false, error, notificationMessage };
    }
    default:
      return state;
  }
};
