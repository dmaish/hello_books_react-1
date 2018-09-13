/**
User actions tests
*/

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import storage from 'mock-local-storage';
import nock from 'nock';
import { searchTypes } from '../../actions/searchTypes';
import searchAction from '../../actions/searchAction';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Asyncs action for search for a book', () => {
  beforeEach(() => {
    localStorage.clear();
    // remove callback
    localStorage.itemInsertionCallback = null;
    localStorage.setItem(
      'access_token',
      JSON.stringify('eyJ0eXAiOiJKV1QiLSa78Q9ZF5fjbfIsfhS1d-6wCyQ'),
    );
  });
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
    nock.cleanAll();
  });
  it('Search for book/s', () => {
    const data = 'book search here';
    const expectedActions = [
      { type: searchTypes.SEARCH_REQUEST, body: { data } },
      { type: searchTypes.SEARCH_SUCCESS, body: { books: [] } },
    ];
    const store = mockStore({ users: [] }, expectedActions);
    fetchMock.mock('*', { books: [] });
    store.dispatch(searchAction());
  });
});
