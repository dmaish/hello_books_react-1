/**
 * It contains all the reducers of the application
 */

import { combineReducers } from 'redux';

import {
  registration,
  userProfileReducer,
  loginReducer,
  logoutReducer,
  resetPasswordReducer,
} from './userReducer';
import {
  borrowReducer,
  returnBookReducer,
  borrowHistoryReducer,
  unReturnedBooksReducer,
} from './borrowReducers';
import {
  getBooks, addBook, gettingBook, editingBook, deletingBookReducer,
} from './booksReducers';
import { usersListReducer } from './usersListReducers';
import { searchReducers } from './searchReducers';
import { alert } from './alertReducer';

const rootReducer = combineReducers({
  registration,
  loginReducer,
  logoutReducer,
  resetPasswordReducer,
  alert,
  borrowReducer,
  userProfileReducer,
  returnBookReducer,
  borrowHistoryReducer,
  unReturnedBooksReducer,
  getBooks,
  gettingBook,
  editingBook,
  addBook,
  deletingBookReducer,
  usersListReducer,
  searchReducers,
});

export default rootReducer;
