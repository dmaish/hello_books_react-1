/**
 *  Actions triggerred when book is added, edited, deleted
 * or when getting book or books
 */

// Major imports that is used by add, get, edit, delete books functionalities
import { booksServices, featuredbooksService } from '../services/booksServices';
import { booksConstants } from './actionTypes';
import { history } from '../helpers/history';
import { notify } from '../helpers/notify';
import { alertActions } from './alertActions';

// Export addBook, editBook and getBook as booksActions
export const booksActions = {
  addBook,
  getBook,
  editBook,
};

// Function to add a book by the admin
function addBook(book) {
  return (dispatch) => {
    dispatch(requestAddBook(book));
    // Add book function to fetch the endpoint from backend.
    // This function is available in services/bookServices.js file
    booksServices.addBook(book).then(
      (book) => {
        // Dispatch function to add a book
        dispatch(addedBook(book));
        // Redirect the user to the admin dashboard
        history.push('/secret/admin/dashboard');
        // Use notify from react tostify to display success notification
        notify('success', 'Success', book.message);
      },
      (error) => {
        // Notify user on the error response received
        error.then((response) => {
          // Get the response when the response is not OK.
          dispatch(addedBookFailure(response.message));
          // Dispatch error notification to the user.
          dispatch(alertActions.error(response.message));
        });
      },
    );
  };
}
// Function to make request to the server (Add book request)
function requestAddBook(book) {
  return {
    type: booksConstants.ADD_BOOK_REQUEST,
    book,
  };
}
// Function handling the sucess response from the server
function addedBook(book) {
  return {
    type: booksConstants.ADD_BOOK_SUCCESS,
    book,
  };
}
// Function handling the failure response from the server
function addedBookFailure(error) {
  return {
    type: booksConstants.ADD_BOOK_FAILURE,
    error,
  };
}

// Function to delete a book by the admin
function editBook(book) {
  return (dispatch) => {
    dispatch(requestEditBook(book));
    // Function to fetch editBook API from backend
    booksServices.editBook(book).then(
      (book) => {
        dispatch(editedBook(book));
        // Push to admin dashboard after success of editing
        history.push('/secret/admin/dashboard');
        // Notify the user in case their is success
        notify('success', 'Success', book.message);
      },
      (error) => {
        // Return response of the error received
        error.then((response) => {
          // Dispatch user failure message to the reducers
          dispatch(editBookFailure(response.message));
          // Notify the user what went wrong in forms
          dispatch(alertActions.error(response.message));
        });
      },
    );
  };
}
// Function making request to server for edit
function requestEditBook(bookId) {
  return {
    type: booksConstants.EDIT_BOOK_REQUEST,
    bookId,
  };
}

function editedBook(book, bookId) {
  return {
    type: booksConstants.EDIT_BOOK_SUCCESS,
    book,
    bookId,
  };
}

function editBookFailure(error) {
  return {
    type: booksConstants.EDIT_BOOK_FAILURE,
    error,
  };
}
// Get all books function.
// Page is set to default 1 when making request
export const getBooks = (page = 1) => (dispatch) => {
  dispatch(requestBooks());
  // Fetch getBooks API with default page
  booksServices.getBooks(page).then(
    (books) => {
      // Dispatch the books received.
      dispatch(receiveBooks(books));
    },
    (error) => {
      error.then((response) => {
        // Dispatch error in case their is no books available
        dispatch(failureBooks(response.message));
        // Notify the user in case something goes wrong
        notify('error', 'Error', response.message);
      });
    },
  );
};

// Get a list of eight books to diplay in homepage as featured books
export const featuredBooksAction = () => (dispatch) => {
  dispatch(requestBooks());
  // Call featuredbooksService function from services
  // to fetch the featuredBooks endpoint from backend
  featuredbooksService().then(
    (books) => {
      // Dispatch the received eight books
      dispatch(receiveBooks(books));
    },
    (error) => {
      error.then((response) => {
        // In case of any response rather that OK, then dispatch the error
        dispatch(failureBooks(response.message));
      });
    },
  );
};

// Make request to the server function
const requestBooks = () => ({
  type: booksConstants.BOOKS_REQUEST,
});
// Get response from server and dispatch in case of success
const receiveBooks = books => ({
  type: booksConstants.BOOKS_SUCCESS,
  books,
});
// Get response from server and dispatch in case of failure
const failureBooks = error => ({
  type: booksConstants.BOOKS_FAILURE,
  error,
});

// Get a single book action
function getBook(bookId) {
  return (dispatch) => {
    dispatch(getBookRequest(bookId));
    // Make request to backend server through fetch
    booksServices.getBook().then(
      (book) => {
        // In case of success, then dispatch the book received
        dispatch(receiveBook(book));
      },
      (error) => {
        // In case of error when fetching or error !== OK, then dipatch the error
        error.then((response) => {
          dispatch(theBookNotFound(response.message));
          // Notify the user in case of an error
          notify('error', 'Error', response.error);
        });
      },
    );
  };
  function getBookRequest(bookId) {
    return {
      type: booksConstants.SINGLE_BOOK_REQUEST,
      bookId,
    };
  }
  function receiveBook(bookId) {
    return {
      type: booksConstants.SINGLE_BOOK_SUCCESS,
      bookId,
    };
  }
  function theBookNotFound(error) {
    return {
      type: booksConstants.SINGLE_BOOK_FAILURE,
      error,
    };
  }
}

// Delete action function that fetch api and dispatched the results to the user
export const deleteBookAction = bookId => (dispatch) => {
  deleteBookRequest(bookId);
  // Fetch the delete endpoint for book
  booksServices.deleteBook(bookId).then(
    (book) => {
      // In case the delete was done successfully, then dispatch the message
      dispatch(deleteBookSuccess(book.message, bookId));
      // Make sure that the page the user is redirected is admin dashboard
      history.push('/secret/admin/dashboard');
      // Notify the admin that book was deleted
      notify('success', 'Success', book.message);
    },
    (error) => {
      error.then((response) => {
        // Get the response in case the book cannot be deleted
        dispatch(deleteBookFailure(response.message));
        // Notify the user/Get user a message that book cannot be deleted
        notify('error', 'Error', response.message);
      });
    },
  );
};
// Make request to the server to delete a book.
const deleteBookRequest = bookId => ({
  type: booksConstants.DELETE_BOOK_REQUEST,
  bookId,
});
// Function to call when the book was deleted successfully.
// Get the book response and return the bookId.
const deleteBookSuccess = (book, bookId) => ({
  type: booksConstants.DELETE_BOOK_SUCCESS,
  book,
  bookId,
});
// Incase the response from server is not OK, call this function
const deleteBookFailure = error => ({
  type: booksConstants.DELETE_BOOK_FAILURE,
  error,
});
