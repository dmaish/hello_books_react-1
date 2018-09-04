/**
 *  Actions triggerred when getting borrowing history or
 * books borrowed but yet to return
 */

import { borrowConstants } from './borrowTypes';
import { borrowServices } from '../services/borrowServices';

const requestHistory = () => ({
  type: borrowConstants.BORROW_HISTORY_REQUEST,
});
const receiveHistory = books => ({
  type: borrowConstants.BORROW_HISTORY_SUCCESS,
  books,
});
const historyFailure = error => ({
  type: borrowConstants.BORROW_HISTORY_FAILURE,
  error,
});
const returnBorrowHistory = (page = 1) => (dispatch) => {
  dispatch(requestHistory());
  borrowServices.borrowHistory(page).then(
    (books) => {
      dispatch(receiveHistory(books));
    },
    (error) => {
      error.then((response) => {
        dispatch(historyFailure(response.message));
      });
    },
  );
};

const requestUnreturnHistory = () => ({
  type: borrowConstants.UNRETURNED_REQUEST,
});

const receiveUnreturnHistory = books => ({
  type: borrowConstants.UNRETURNED_SUCCESS,
  books,
});

const unreturnHistoryFailure = error => ({
  type: borrowConstants.UNRETURNED_FAILURE,
  error,
});
const unReturnBooksHistory = () => (dispatch) => {
  dispatch(requestUnreturnHistory());
  borrowServices.unReturnedBooks().then(
    (books) => {
      dispatch(receiveUnreturnHistory(books));
    },
    (error) => {
      error.then((response) => {
        dispatch(unreturnHistoryFailure(response.message));
      });
    },
  );
};

export const borrowHistory = {
  returnBorrowHistory,
  unReturnBooksHistory,
};
