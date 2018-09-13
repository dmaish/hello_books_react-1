/**
 * It contains getting book/books, adding book, editing book
 * and delete book reducers
 */

import { booksConstants } from '../actions/actionTypes';

export function gettingBook(
  state = {
    loading: false,
    book: {},
    error: {},
  },
  action,
) {
  switch (action.type) {
    case booksConstants.SINGLE_BOOK_REQUEST:
      return { ...state, loading: true };
    case booksConstants.SINGLE_BOOK_SUCCESS:
      return { ...state, book: action.book, loading: false };
    case booksConstants.SINGLE_BOOK_FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
}

export function addBook(
  state = {
    loading: false,
    book: {},
    error: {},
  },
  actions,
) {
  switch (actions.type) {
    case booksConstants.ADD_BOOK_REQUEST:
      return { ...state, loading: true, addingBook: true };
    case booksConstants.ADD_BOOK_SUCCESS:
      return {
        ...state,
        loading: false,
        book: actions.book,
        addingBook: false,
      };
    case booksConstants.ADD_BOOK_FAILURE:
      return {
        ...state,
        loading: false,
        error: actions.error,
        addingBook: false,
      };
    default:
      return state;
  }
}

export function editingBook(
  state = {
    loading: false,
    book: {},
    error: {},
  },
  action,
) {
  switch (action.type) {
    case booksConstants.EDIT_BOOK_REQUEST:
      return { ...state, loading: true, editing: true };
    case booksConstants.EDIT_BOOK_SUCCESS:
      return {
        ...state,
        loading: false,
        book: action.book,
        editing: false,
      };
    case booksConstants.EDIT_BOOK_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
        editing: false,
      };
    default:
      return state;
  }
}

export function deletingBookReducer(
  state = {
    loading: false,
    book_id: '',
    error: {},
  },
  action,
) {
  switch (action.type) {
    case booksConstants.DELETE_BOOK_REQUEST:
      return { ...state, loading: true };
    case booksConstants.DELETE_BOOK_SUCCESS:
      return { ...state, loading: false, book_id: action.book_id };
    case booksConstants.DELETE_BOOK_FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
}

export function getBooks(
  state = {
    loading: false,
    books: [],
    errors: {},
  },
  actions,
) {
  // Get the current state of books
  const currentBooks = state.books.all_books || state.books;
  // Get the new state of books after success
  const newBooks = { ...state.books };
  switch (actions.type) {
    case booksConstants.BOOKS_REQUEST:
      return { ...state, loading: true };
    case booksConstants.BOOKS_SUCCESS:
      return { ...state, books: actions.books, loading: false };
    case booksConstants.BOOKS_FAILURE:
      return { ...state, loading: false, errors: actions.error };
    case booksConstants.DELETE_BOOK_SUCCESS:
      // Filter the book deleted and remove from the list autoamtically
      newBooks.all_books = currentBooks.filter(book => book.book_id !== actions.bookId);
      // Return the new state of books
      return { ...state, books: newBooks };
    default:
      return state;
  }
}
