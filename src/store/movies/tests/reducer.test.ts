import { movieReducer } from '../reducer';
import * as Types from '../types';
import { MovieActionTypes, DELETE_MOVIE_SUCCESS, EDIT_MOVIE_SUCCESS, ADD_MOVIE_SUCCESS, SET_DELETE_MOVIE_ID, CLEAR_DELETE_MOVIE_ID, SELECT_MOVIE } from '../types';
import { Movie } from '../../../models/movie.model';

describe('movieReducer', () => {
  it('should return the initial state', () => {
    expect(movieReducer(undefined, {} as any)).toEqual(
      {
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
      },
    );
  });

  it('should handle SHOW_SPINNER', () => {
    expect(movieReducer({} as any, { type: Types.SHOW_SPINNER })).toEqual(
      { isLoading: true },
    );
  });

  it('should handle GET_MOVIES_SUCCESS', () => {
    const mockPayload = {
      queryParams: { search: 'test' },
      movies: [{ id: 1 }, { id: 2 }],
    } as any;
    expect(movieReducer({} as any, {
      type: Types.GET_MOVIES_SUCCESS,
      payload: mockPayload,
    })).toEqual(
      {
        foundMovies: [],
        isLoaded: true,
        isLoading: false,
        movies: mockPayload.movies,
        queryParams: mockPayload.queryParams },
    );
  });

  it('should handle DELETE_MOVIE_SUCCESS', () => {
    expect(movieReducer({
      movies: [{ id: 1 }, { id: 2 }],
    } as any, {
      type: Types.DELETE_MOVIE_SUCCESS,
      payload: 1,
    })).toMatchObject(
      {
        isLoading: false,
        movies: [{ id: 2 }],
        deleteMovieId: null,
      },
    );
  });

  it('should handle EDIT_MOVIE_SUCCESS', () => {
    expect(movieReducer({
      editedMovie: {} as Movie,
      movies: [{ id: 1 }, { id: 2 }],
    } as any, {
      type: Types.EDIT_MOVIE_SUCCESS,
      payload: { id: 2, title: 'test' } as Movie,
    })).toMatchObject(
      {
        isLoading: false,
        movies: [{ id: 1 }, { id: 2, title: 'test' }],
        editedMovie: null,
      },
    );
  });

  it('should handle ADD_MOVIE_SUCCESS', () => {
    expect(movieReducer({
      editedMovie: {} as Movie,
      movies: [{ id: 1 }],
    } as any, {
      type: Types.ADD_MOVIE_SUCCESS,
      payload: { id: 2, title: 'test' } as Movie,
    })).toMatchObject(
      {
        isLoading: false,
        movies: [{ id: 1 }, { id: 2, title: 'test' }],
        editedMovie: null,
      },
    );
  });

  it('should handle SET_DELETE_MOVIE_ID', () => {
    expect(movieReducer({
    } as any, {
      type: Types.SET_DELETE_MOVIE_ID,
      payload: 1,
    })).toEqual({ deleteMovieId: 1 });
  });

  it('should handle CLEAR_DELETE_MOVIE_ID', () => {
    expect(movieReducer({
      deleteMovieId: 1,
    } as any, {
      type: Types.CLEAR_DELETE_MOVIE_ID,
    })).toEqual({ deleteMovieId: null });
  });

  it('should handle SELECT_MOVIE', () => {
    expect(movieReducer({ }as any, {
      type: Types.SELECT_MOVIE,
      payload: {} as Movie,
    })).toEqual({ selectedMovie: {} });
  });

  it('should handle SET_EDIT_MOVIE', () => {
    expect(movieReducer({ }as any, {
      type: Types.SET_EDIT_MOVIE,
      payload: {} as Movie,
    })).toEqual({ editedMovie: {} });
  });

  it('should handle CLEAR_SELECTED_MOVIE', () => {
    expect(movieReducer({
      editedMovie: {},
    }as any, {
      type: Types.CLEAR_SELECTED_MOVIE,
    })).toEqual({ editedMovie: null });
  });
});
