// reducers/index.js
import { combineReducers } from 'redux';
import booksReducer from './booksReducer';

const rootReducer = combineReducers({
  books: booksReducer,
});

export default rootReducer;
