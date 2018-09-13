/**
Books actions tests
*/

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import expect from 'expect';
import storage from 'mock-local-storage';
import nock from 'nock';
import { borrowConstants } from '../../actions/borrowTypes';
import { borrow, returnBook } from '../../actions/borrowActions';

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
    nock.cleanAll();
  });

  it('Borrow a book', () => {
    const bookId = 1245;
    const expectedActions = [
      { type: borrowConstants.BORROW_REQUEST, body: bookId },
      { type: borrowConstants.BORROW_SUCCESS, body: bookId },
    ];
    const store = mockStore({ book: bookId }, expectedActions);
    fetchMock.mock('*', { book: bookId });
    store.dispatch(borrow(bookId));
  });
  it('Return a book', () => {
    const bookId = 1245;
    const expectedAction = [
      { type: borrowConstants.RETURN_REQUEST },
      { type: borrowConstants.RETURN_FAILURE, body: bookId },
    ];
    const store = mockStore({ book: bookId }, expectedAction);
    fetchMock.mock('*', { book: bookId });
    store.dispatch(returnBook(bookId));
  });
});
