/**
Books actions tests
*/

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import expect from 'expect';
import storage from 'mock-local-storage';
import { booksConstants } from '../../actions/actionTypes';
import { booksActions, deleteBookAction, getBooks } from '../../actions/booksActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Asyncs action to get books', () => {
  beforeEach(() => {
    localStorage.clear();
    // remove callback
    localStorage.itemInsertionCallback = null;
    localStorage.setItem('access_token', JSON.stringify('eyJ0eXAiOiJKV1Qoii858545Q'));
  });
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('Gets books', () => {
    const data = [];
    const expectedActions = [
      { type: booksConstants.BOOKS_REQUEST },
      { type: booksConstants.BOOKS_SUCCESS, body: { books: data } },
    ];
    const store = mockStore({ books: [] }, expectedActions);
    fetchMock.mock('*', { books: [] });
    store.dispatch(getBooks());
  });

  it('Adds a book', () => {
    const book = {};
    const expectedAction = [
      { type: booksConstants.ADD_BOOK_REQUEST },
      { type: booksConstants.ADD_BOOK_SUCCESS, body: { book } },
    ];
    const store = mockStore({ book }, expectedAction);
    fetchMock.mock('*', { book });
    store.dispatch(booksActions.addBook());
  });

  it('Edit a book', () => {
    const bookId = 1670;
    const expectedActions = [
      { type: booksConstants.EDIT_BOOK_REQUEST },
      { type: booksConstants.EDIT_BOOK_SUCCESS, body: { book: bookId } },
    ];
    const store = mockStore({ book: bookId }, expectedActions);
    fetchMock.mock('*', { book: bookId });
    store.dispatch(booksActions.editBook(bookId));
  });

  it('Delete a book', () => {
    const bookId = 3456;
    const expectedAction = [
      { type: booksConstants.DELETE_BOOK_REQUEST },
      { type: booksConstants.DELETE_BOOK, body: { book: bookId } },
    ];
    const store = mockStore({ book: bookId }, expectedAction);
    fetchMock.mock('*', { book: bookId });
    store.dispatch(deleteBookAction(bookId));
  });
});
