import {
  ADD_MOVIE_SUCCESS,
  CLEAR_DELETE_MOVIE_ID,
  CLEAR_SELECTED_MOVIE,
  DELETE_MOVIE_SUCCESS,
  EDIT_MOVIE_SUCCESS,
  FILTER_BY_GENRES_SUCCESS,
  GET_MOVIES_SUCCESS,
  IMoviesState,
  MovieActionTypes,
  MOVIES_ERROR,
  SEARCH_MOVIES_SUCCESS,
  SELECT_MOVIE,
  SET_DELETE_MOVIE_ID,
  SHOW_SPINNER,
  SORT_BY_SUCCESS,
} from './types';
import { ToasterMessage, ToasterMessageType } from '../../models/toasterNotification.model';

const initialState: IMoviesState = {
  movies: [],
  isLoading: false,
  isLoaded: false,
  error: null,
  notificationMessage: null,
  deleteMovieId: null,
  selectedMovie: null,
  foundMovies: [],
};

export const movieReducer = (state = initialState, action: MovieActionTypes): IMoviesState => {
  switch (action.type) {
    case SHOW_SPINNER:
      return { ...state, isLoading: true };
    case GET_MOVIES_SUCCESS:
      return {
        ...state,
        isLoaded: true,
        isLoading: false,
        foundMovies: [],
        movies: action.payload,
      };
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
    case FILTER_BY_GENRES_SUCCESS:
    case SORT_BY_SUCCESS:
      return { ...state, isLoading: false, movies: action.payload };
    case EDIT_MOVIE_SUCCESS: {
      const updatedMovie = action.payload;
      const index = state.movies.findIndex(movie => movie.id === +updatedMovie.id);
      const movies = [...state.movies];
      movies[index] = updatedMovie;
      const notificationMessage = new ToasterMessage('movie has been successfully edited');
      return { ...state, isLoading: false, movies, notificationMessage, selectedMovie: null };
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
        selectedMovie: null,
      };
    }
    case SEARCH_MOVIES_SUCCESS: {
      const foundMovies = action.payload;
      return { ...state, movies: [], isLoaded: true, isLoading: false, foundMovies };
    }
    case SET_DELETE_MOVIE_ID: {
      return { ...state, deleteMovieId: action.payload };
    }
    case CLEAR_DELETE_MOVIE_ID: {
      return { ...state, deleteMovieId: null };
    }
    case SELECT_MOVIE: {
      return { ...state, selectedMovie: action.payload };
    }
    case CLEAR_SELECTED_MOVIE: {
      return { ...state, selectedMovie: null };
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
