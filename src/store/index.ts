import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { movieReducer } from './movies/reducer';

const rootReducer = combineReducers({
  movies: movieReducer,
});

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
