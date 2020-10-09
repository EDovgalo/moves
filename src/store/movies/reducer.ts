import {
  ADD_MOVIE_SUCCESS,
  CLEAR_DELETE_MOVIE_ID,
  CLEAR_MOVIES,
  CLEAR_SELECTED_MOVIE,
  DELETE_MOVIE_SUCCESS,
  EDIT_MOVIE_SUCCESS,
  GET_MOVIE_BY_ID_SUCCESS,
  GET_MOVIES_SUCCESS,
  IMoviesState,
  MovieActionTypes,
  MOVIES_ERROR,
  SELECT_MOVIE,
  SET_DELETE_MOVIE_ID,
  SET_EDIT_MOVIE,
  SHOW_SPINNER,
} from './types';
import { ToasterMessage, ToasterMessageType } from '../../models/toasterNotification.model';

const initialState: IMoviesState = {
  movies: [],
  isLoading: false,
  isLoaded: false,
  error: null,
  notificationMessage: null,
  deleteMovieId: null,
  editedMovie: null,
  foundMovies: [],
  selectedMovie: null,
  queryParams: { filter: null, search: null, sortBy: null, searchBy: 'title' },
};

export const movieReducer = (state = initialState, action: MovieActionTypes): IMoviesState => {
  switch (action.type) {
    case SHOW_SPINNER:
      return { ...state, isLoading: true };
    case GET_MOVIES_SUCCESS: {
      const { queryParams, movies } = action.payload;
      return {
        ...state,
        foundMovies: [],
        isLoaded: true,
        isLoading: false,
        movies,
        queryParams,
      };
    }
    case DELETE_MOVIE_SUCCESS: {
      const id = action.payload;
      const newMovies = state.movies.filter(move => move.id !== id);
      const notificationMessage = new ToasterMessage('movie has been successfully deleted');
      return {
        ...state,
        isLoading: false,
        movies: newMovies,
        notificationMessage,
        deleteMovieId: null,
      };
    }
    case EDIT_MOVIE_SUCCESS: {
      const updatedMovie = action.payload;
      const index = state.movies.findIndex(movie => movie.id === +updatedMovie.id);
      const movies = [...state.movies];
      movies[index] = updatedMovie;
      const notificationMessage = new ToasterMessage('movie has been successfully edited');
      return { ...state, isLoading: false, movies, notificationMessage, editedMovie: null };
    }
    case ADD_MOVIE_SUCCESS: {
      const { movies } = state;
      movies.push(action.payload);
      const notificationMessage = new ToasterMessage('movie has been successfully added');
      return {
        ...state,
        isLoading:
          false,
        movies: [...movies],
        notificationMessage,
        editedMovie: null,
      };
    }
    case GET_MOVIE_BY_ID_SUCCESS: {
      return { ...state, isLoading: false, selectedMovie: action.payload };
    }
    case SET_DELETE_MOVIE_ID: {
      return { ...state, deleteMovieId: action.payload };
    }
    case CLEAR_DELETE_MOVIE_ID: {
      return { ...state, deleteMovieId: null };
    }
    case CLEAR_MOVIES: {
      return { ...state, movies: [] };
    }
    case SET_EDIT_MOVIE: {
      return { ...state, editedMovie: action.payload };
    }
    case CLEAR_SELECTED_MOVIE: {
      return { ...state, editedMovie: null };
    }
    case SELECT_MOVIE: {
      return { ...state, selectedMovie: action.payload };
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
