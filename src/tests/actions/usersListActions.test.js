/**
User actions tests
*/

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import storage from 'mock-local-storage';
import nock from 'nock';
import { usersListsTypes } from '../../actions/actionTypes';
import usersListActions from '../../actions/usersListActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Asyncs action to get user lists', () => {
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
  it('Gets users by admin', () => {
    const users = [];
    const expectedActions = [
      { type: usersListsTypes.USERS_REQUEST },
      { type: usersListsTypes.USERS_SUCCESS, body: { users } },
    ];
    const store = mockStore({ users }, expectedActions);
    fetchMock.mock('*', { users });
    store.dispatch(usersListActions());
  });
});
