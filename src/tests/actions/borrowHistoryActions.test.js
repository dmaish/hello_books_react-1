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
import { borrowHistory } from '../../actions/borrowHistoryActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Asyncs action to user borrow history', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('Gets all user borrow history', () => {
    const data = [];
    const expectedActions = [
      { type: borrowConstants.BORROW_HISTORY_REQUEST },
      { type: borrowConstants.BORROW_HISTORY_SUCCESS, body: { books: data } },
    ];
    const store = mockStore({ books: data }, expectedActions);
    fetchMock.mock('*', { books: data });
    store.dispatch(borrowHistory.returnBorrowHistory());
  });
  it('Gets books  borrowed but not yet returned', () => {
    const unReturnedBooks = [];
    const expectedAction = [
      { type: borrowConstants.UNRETURNED_REQUEST },
      { type: borrowConstants.UNRETURNED_SUCCESS, body: { books: unReturnedBooks } },
    ];
    const store = mockStore({ books: unReturnedBooks }, expectedAction);
    fetchMock.mock('*', { books: unReturnedBooks });
    store.dispatch(borrowHistory.unReturnBooksHistory());
  });
});
