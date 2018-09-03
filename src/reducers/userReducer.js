/**
 * It contains registration, login, logout and reset password reducers
 */

import { userConstants } from '../actions/actionTypes';

export function registration(state = {}, { type }) {
  switch (type) {
    case userConstants.REGISTER_REQUEST:
      return { registering: true };
    case userConstants.REGISTER_SUCCESS:
      return {};
    case userConstants.REGISTER_FAILURE:
      return {};
    default:
      return state;
  }
}
// User profile reducer
export const userProfileReducer = (state = { loading: false, user: {}, error: {} }, actions) => {
  switch (actions.type) {
    // Making request to the server
    case userConstants.USER_PROFILE_REQUEST:
      return { ...state, loading: true };
    // Results received after request is success
    case userConstants.USER_PROFILE_SUCCESS:
      return { ...state, user: actions.user, loading: false };
    // In case of failure, the reducer triggered
    case userConstants.USER_PROFILE_FAILURE:
      return { ...state, error: actions.error, loading: false };
    default:
      return state;
  }
};

export function loginReducer(state = {}, { type }) {
  switch (type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingin: true,
      };
    case userConstants.LOGIN_SUCCESS:
      return {};
    case userConstants.LOGIN_FAILURE:
      return {};
    default:
      return state;
  }
}

export function logoutReducer(
  state = {
    loggedOut: false,
  },
  action,
) {
  switch (action.type) {
    case userConstants.LOGOUT_USER:
      return { ...state, loggedOut: true };
    default:
      return state;
  }
}

// Reset password reducer function
export const resetPasswordReducer = (state = { loading: false, user: {}, error: {} }, actions) => {
  switch (actions.type) {
    case userConstants.RESET_PASSWORD_REQUEST:
      return { ...state, loading: true, resetting: true };
    case userConstants.RESET_PASSWORD_SUCCESS:
      return { ...state, user: actions.user, loading: false };
    case userConstants.RESET_PASSWORD_FAILURE:
      return { ...state, error: actions.error, loading: false };
    default:
      return state;
  }
};
