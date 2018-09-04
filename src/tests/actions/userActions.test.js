/**
User actions tests
*/

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import storage from 'mock-local-storage';
import nock from 'nock';
import { userConstants } from '../../actions/actionTypes';
import { userActions } from '../../actions/userActions';
import { resetPasswordAction } from '../../actions/userActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Asyncs action to add user', () => {
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

  it('Register user', () => {
    const data = {
      email: 'ezrqnkemboi@gmail.com',
      first_name: 'ezrqn',
      last_name: 'kemboi',
      username: 'ezrqn',
      password: 'ezrqnpassword',
    };
    const expectedActions = [
      { type: userConstants.REGISTER_REQUEST },
      { type: userConstants.REGISTER_SUCCESS, body: { user: data } },
    ];
    const store = mockStore({ user: data }, expectedActions);
    fetchMock.mock('*', { user: data });
    store.dispatch(userActions.register());
  });

  it('It logs in a user', () => {
    const user = {};
    const expectedAction = [
      { type: userConstants.LOGIN_REQUEST },
      { type: userConstants.LOGIN_SUCCESS, body: { user } },
    ];
    const store = mockStore({ user }, expectedAction);
    fetchMock.mock('*', { user });
    store.dispatch(userActions.login());
  });

  it('It logs out a user', () => {
    const expectedAction = [{ type: userConstants.LOGOUT_USER }];
    const store = mockStore({}, expectedAction);
    fetchMock.mock('*', {});
    store.dispatch(userActions.logout());
  });

  it('It reset user password', () => {
    const user = {};
    const expectedAction = [
      { type: userConstants.RESET_PASSWORD_REQUEST },
      { type: userConstants.RESET_PASSWORD_SUCCESS, body: { user } },
    ];
    const store = mockStore({ user }, expectedAction);
    fetchMock.mock('*', { user });
    store.dispatch(resetPasswordAction());
  });
});
