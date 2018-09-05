/**
 *  Actions triggerred when user borrow book, return book
 */

import { borrowConstants } from './borrowTypes';
import { borrowServices } from '../services/borrowServices';
import { history } from '../helpers/history';
import notify from '../helpers/notify';

const borrowRequest = bookId => ({
  type: borrowConstants.BORROW_REQUEST,
  bookId,
});

const borrowSuccess = book => ({
  type: borrowConstants.BORROW_SUCCESS,
  book,
});

const borrowFailure = error => ({
  type: borrowConstants.BORROW_FAILURE,
  error,
});
export const borrow = bookId => (dispatch) => {
  dispatch(borrowRequest(bookId));
  borrowServices.borrow(bookId).then(
    (book) => {
      dispatch(borrowSuccess(book.book_borrowed));
      history.push('/dashboard');
      notify('success', 'Success', book.message);
    },
    (error) => {
      error.then((response) => {
        dispatch(borrowFailure(response.message));
        notify('error', 'Error', response.message);
      });
    },
  );
};
const returnRequest = bookId => ({
  type: borrowConstants.RETURN_REQUEST,
  bookId,
});

const returnSuccess = (book, bookId) => ({
  type: borrowConstants.RETURN_SUCCESS,
  book,
  bookId,
});

const returnFailure = error => ({
  type: borrowConstants.RETURN_FAILURE,
  error,
});

export const returnBook = bookId => (dispatch) => {
  dispatch(returnRequest(bookId));
  borrowServices.returnBook(bookId).then(
    (book) => {
      dispatch(returnSuccess(book.message, bookId));
      history.push('/dashboard');
      notify('success', 'Success', book.message);
    },
    (error) => {
      error.then((response) => {
        dispatch(returnFailure(response.message));
        notify('success', 'Success', response.message);
      });
    },
  );
};
