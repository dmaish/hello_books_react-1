import expect from 'expect';
import { userConstants } from '../../actions/actionTypes';
import {
  registration,
  loginReducer,
  resetPasswordReducer,
  logoutReducer,
} from '../../reducers/userReducer';

describe('user reducer', () => {
  it('registration should return state', () => {
    expect(registration(undefined, {})).toEqual({});
  });
  it('registration should handle userConstants.REGISTER_REQUEST', () => {
    expect(
      registration([], {
        type: userConstants.REGISTER_REQUEST,
        registering: true,
      }),
    ).toEqual({
      registering: true,
    });
  });
  it('registration should handle userConstants.REGISTER_SUCCESS', () => {
    expect(
      registration([], {
        type: userConstants.REGISTER_SUCCESS,
      }),
    ).toEqual({});
  });
  it('registration should handle userConstants.REGISTER_FAILURE', () => {
    expect(
      registration([], {
        type: userConstants.REGISTER_FAILURE,
      }),
    ).toEqual({});
  });

  it('login should return state', () => {
    expect(loginReducer(undefined, {})).toEqual({});
  });
  it('login should handle userConstants.LOGIN_REQUEST', () => {
    expect(
      loginReducer([], {
        type: userConstants.LOGIN_REQUEST,
      }),
    ).toEqual({
      loggingin: true,
    });
  });
  it('login should handle userConstants.LOGIN_SUCCESS', () => {
    expect(
      loginReducer([], {
        type: userConstants.LOGIN_SUCCESS,
      }),
    ).toEqual({});
  });
  it('login should handle userConstants.LOGIN_FAILURE', () => {
    expect(
      loginReducer([], {
        type: userConstants.LOGIN_FAILURE,
      }),
    ).toEqual({});
  });

  it('reset password should return state', () => {
    expect(resetPasswordReducer(undefined, {})).toEqual({
      loading: false,
      user: {},
      error: {},
    });
  });
  it('reset password should handle userConstants.RESET_PASSWORD_REQUEST', () => {
    expect(
      resetPasswordReducer([], {
        type: userConstants.RESET_PASSWORD_REQUEST,
      }),
    ).toEqual({
      loading: true,
      resetting: true,
    });
  });
  it('reset password should handle userConstants.RESET_PASSWORD_SUCCESS', () => {
    expect(
      resetPasswordReducer([], {
        type: userConstants.RESET_PASSWORD_SUCCESS,
        loading: false,
        user: {},
      }),
    ).toEqual({
      loading: false,
      user: {},
    });
  });
  it('reset password should handle userConstants.RESET_PASSWORD_FAILURE', () => {
    expect(
      resetPasswordReducer([], {
        type: userConstants.RESET_PASSWORD_FAILURE,
        loading: false,
        error: {},
      }),
    ).toEqual({
      loading: false,
      error: {},
    });
  });

  it('logout should return state', () => {
    expect(logoutReducer(undefined, {})).toEqual({
      loggedOut: false,
    });
  });

  it('logout should handle userConstants.LOGOUT_USER', () => {
    expect(
      logoutReducer([], {
        type: userConstants.LOGOUT_USER,
        loggedOut: true,
      }),
    ).toEqual({
      loggedOut: true,
    });
  });
});
