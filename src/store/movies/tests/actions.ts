import 'isomorphic-fetch';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as Types from '../types';
import * as Actions from '../actions';
import { Movie } from '../../../models/movie.model';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mockResponse = (status, statusText, response) => new Response(response, {
  status,
  statusText,
  headers: {
    'Content-type': 'application/json',
  },
});

describe('actions', () => {
  describe('api calls', () => {
    const store = mockStore({});
    const URL = 'http://localhost:4000/movies';
    const mockMovie = { id: 1, title: 'test' } as Movie;

    afterEach(() => {
      store.clearActions();
    });

    it('#fetchMovies should get all movies', () => {
      const mockMovies = [{ id: 1 }, { id: 2 }];
      const queryParams = { sort: 'asc' };
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve(mockResponse(200,
        null, JSON.stringify({ data: mockMovies }))));
      return store.dispatch(Actions.fetchMovies(queryParams))
        .then(() => {
          const expectedActions = store.getActions();
          expect(window.fetch).toHaveBeenCalledWith(`${URL}?sort=asc`);
          expect(expectedActions.length).toBe(2);
          expect(expectedActions).toEqual([
            { type: Types.SHOW_SPINNER },
            { type: Types.GET_MOVIES_SUCCESS, payload: { movies: mockMovies } }]);
        });
    });

    it('#getMovieById should get movie by id', () => {
      const id = 1;
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve(mockResponse(200,
        null, JSON.stringify({ id }))));
      return store.dispatch(Actions.getMovieById(id))
        .then(() => {
          const expectedActions = store.getActions();
          expect(window.fetch).toHaveBeenCalledWith(`${URL}/${id}`);
          expect(expectedActions).toEqual([
            { type: Types.GET_MOVIE_BY_ID_SUCCESS, payload: { id } }]);
        });
    });

    it('#deleteMovie should delete movie', () => {
      const id = 1;
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve(mockResponse(200,
        null, JSON.stringify(id))));
      return store.dispatch(Actions.deleteMovie(id))
        .then(() => {
          const expectedActions = store.getActions();
          expect(window.fetch).toHaveBeenCalledWith(`${URL}/${id}`, {
            headers: {
              'Content-Type': 'application/json',
            },
            method: 'delete',
          });
          expect(expectedActions.length).toBe(2);
          expect(expectedActions).toEqual([
            { type: Types.SHOW_SPINNER },
            { type: Types.DELETE_MOVIE_SUCCESS, payload: id }]);
        });
    });

    it('#editMovie should edit movie', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve(mockResponse(200,
        null, JSON.stringify(mockMovie))));

      return store.dispatch(Actions.editMovie(mockMovie))
        .then(() => {
          const expectedActions = store.getActions();
          expect(window.fetch).toHaveBeenCalledWith(URL, {
            body: JSON.stringify(mockMovie),
            headers: {
              'Content-Type': 'application/json',
            },
            method: 'put',
          });
          expect(expectedActions.length).toBe(2);
          expect(expectedActions).toEqual([
            { type: Types.SHOW_SPINNER },
            { type: Types.EDIT_MOVIE_SUCCESS, payload: mockMovie }]);
        });
    });

    it('#addMovie should add movie', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve(mockResponse(200,
        null, JSON.stringify(mockMovie))));

      return store.dispatch(Actions.addMovie(mockMovie))
        .then(() => {
          const expectedActions = store.getActions();
          expect(window.fetch).toHaveBeenCalledWith(URL, {
            body: '{"title":"test"}',
            headers: {
              'Content-Type': 'application/json',
            },
            method: 'post',
          });
          expect(expectedActions.length).toBe(2);
          expect(expectedActions).toEqual([
            { type: Types.SHOW_SPINNER },
            { type: Types.ADD_MOVIE_SUCCESS, payload: mockMovie }]);
        });
    });

    it('#addMovie should set error', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.reject(new Error('some error')));

      return store.dispatch(Actions.addMovie(mockMovie))
        .then(() => {
          const expectedActions = store.getActions();
          expect(window.fetch).toHaveBeenCalledWith(URL, {
            body: '{"title":"test"}',
            headers: {
              'Content-Type': 'application/json',
            },
            method: 'post',
          });
          expect(expectedActions.length).toBe(2);
          expect(expectedActions).toEqual([
            { type: Types.SHOW_SPINNER },
            { type: Types.MOVIES_ERROR, payload: new Error('some error') }]);
        });
    });
  });

  it('#clearDeleteMovieId', () => {
    const expectedAction = {
      type: Types.CLEAR_DELETE_MOVIE_ID,
    };
    expect(Actions.clearDeleteMovieId()).toEqual(expectedAction);
  });

  it('#setDeleteMovieId', () => {
    const expectedAction = {
      type: Types.SET_DELETE_MOVIE_ID,
      payload: 3,
    };
    expect(Actions.setDeleteMovieId(3)).toEqual(expectedAction);
  });

  it('#setEditMovie', () => {
    const expectedAction = {
      type: Types.SET_EDIT_MOVIE,
      payload: { id: 1 },
    };
    expect(Actions.setEditMovie({ id: 1 } as Movie)).toEqual(expectedAction);
  });

  it('#selectMovie', () => {
    const expectedAction = {
      type: Types.SELECT_MOVIE,
      payload: {},
    };
    expect(Actions.selectMovie({} as Movie)).toEqual(expectedAction);
  });

  it('#clearEditedMovie', () => {
    const expectedAction = {
      type: Types.CLEAR_SELECTED_MOVIE,
    };
    expect(Actions.clearEditedMovie()).toEqual(expectedAction);
  });

  it('#clearEditedMovie', () => {
    const expectedAction = {
      type: Types.CLEAR_MOVIES,
    };
    expect(Actions.clearMovies()).toEqual(expectedAction);
  });

  it('#clearEditedMovie', () => {
    const expectedAction = {
      type: Types.SET_QUERY_PARAMS,
      payload: { sort: 'asc' },
    };
    expect(Actions.setQueryParams({ sort: 'asc' })).toEqual(expectedAction);
  });
});
