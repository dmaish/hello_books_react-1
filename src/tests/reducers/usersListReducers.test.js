import expect from 'expect';
import { usersListsTypes } from '../../actions/actionTypes';
import { usersListReducer } from '../../reducers/usersListReducers';

describe('Users reducers', () => {
  it('get users and should return state', () => {
    expect(usersListReducer(undefined, {})).toEqual({
      loading: false,
      users: [],
      error: {},
    });
  });
  it('get users and should handle usersListsTypes.USERS_REQUEST', () => {
    expect(
      usersListReducer([], {
        type: usersListsTypes.USERS_REQUEST,
        loading: true,
      }),
    ).toEqual({
      loading: true,
    });
  });
  it('get users and should handle usersListsTypes.USERS_SUCCESS', () => {
    expect(
      usersListReducer([], {
        type: usersListsTypes.USERS_SUCCESS,
        users: [],
        loading: false,
      }),
    ).toEqual({
      users: [],
      loading: false,
    });
  });
  it('get users and should handle usersListsTypes.USERS_FAILURE', () => {
    expect(
      usersListReducer([], {
        type: usersListsTypes.USERS_FAILURE,
        loading: false,
        error: {},
      }),
    ).toEqual({
      loading: false,
      error: {},
    });
  });
});
