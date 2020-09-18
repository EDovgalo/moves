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
  IMoviesState,
  MovieActionTypes,
  MOVIES_ERROR,
  SORT_BY,
  SORT_BY_SUCCESS,
} from './types';

const initialState: IMoviesState = {
  movies: [],
  isLoading: false,
  isLoaded: false,
  error: null,
};

export const movieReducer = (state = initialState, action: MovieActionTypes): IMoviesState => {
  switch (action.type) {
    case GET_MOVIES || EDIT_MOVIE || DELETE_MOVIE || FILTER_BY_GENRES || SORT_BY || ADD_MOVIE:
      return { ...state, isLoading: true };
    case GET_MOVIES_SUCCESS:
      return { ...state, isLoaded: true, isLoading: false, movies: action.payload };
    case DELETE_MOVIE_SUCCESS: {
      const id = action.payload;
      const newMovies = state.movies.filter(move => move.id !== id);
      return { ...state, isLoading: false, movies: newMovies };
    } case FILTER_BY_GENRES_SUCCESS || SORT_BY_SUCCESS:
      return { ...state, isLoading: false, movies: action.payload };
    case EDIT_MOVIE_SUCCESS: {
      const updatedMovie = action.payload;
      const index = state.movies.findIndex(movie => movie.id === +updatedMovie.id);
      const movies = [...state.movies];
      movies[index] = updatedMovie;
      return { ...state, isLoading: false, movies };
    }
    case ADD_MOVIE_SUCCESS: {
      const { movies } = state;
      movies.push(action.payload);
      return { ...state, movies: [...movies] };
    }
    case MOVIES_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};
