/**
 *  Actions triggerred when user is registering, logging in
 * Resetting password and logging out
 */

import { userConstants } from './actionTypes';
import { userServices, userProfile } from '../services/userServices';
import { resetPassword } from '../services/userServices';
import { history } from '../helpers/history';
import notify from '../helpers/notify';
import { alertActions } from './alertActions';

function requestRegister(user) {
  return {
    type: userConstants.REGISTER_REQUEST,
    user,
  };
}
function successRegister(user) {
  return {
    type: userConstants.REGISTER_SUCCESS,
    user,
  };
}
function failureRegister(error) {
  return {
    type: userConstants.REGISTER_FAILURE,
    error,
  };
}

function register(user) {
  return (dispatch) => {
    dispatch(requestRegister(user));
    userServices.register(user).then(
      (user) => {
        dispatch(successRegister(user));
        history.push('/auth/login');
        notify('success', 'Success', user.message);
      },
      (error) => {
        error.then((response) => {
          dispatch(failureRegister(response.message));
          dispatch(alertActions.error(response.message));
        });
      },
    );
  };
}

function requestLogin(user) {
  return {
    type: userConstants.LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    user,
  };
}
function successLogin(user) {
  return {
    type: userConstants.LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    access_token: user.access_token,
  };
}
function failureLogin(error) {
  return {
    type: userConstants.LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    error,
  };
}
function login(user) {
  return (dispatch) => {
    dispatch(requestLogin(user));
    userServices.login(user).then(
      (user) => {
        dispatch(successLogin(user));
        localStorage.setItem('access_token', JSON.stringify(user.access_token));
        if (user.is_admin === true) {
          history.push('/secret/admin/dashboard');
        } else {
          history.push('/dashboard');
        }
        notify('success', 'Success', user.message);
      },
      (error) => {
        error.then((response) => {
          dispatch(failureLogin(response.message));
          dispatch(alertActions.error(response.message));
        });
      },
    );
  };
}
const resetPasswordRequest = user => ({
  type: userConstants.RESET_PASSWORD_REQUEST,
  user,
});

const resetPasswordSuccess = user => ({
  type: userConstants.RESET_PASSWORD_SUCCESS,
  user,
});

const resetPasswordFailure = error => ({
  type: userConstants.RESET_PASSWORD_FAILURE,
  error,
});
// Action function to reset the password of a user
export const resetPasswordAction = user => (dispatch) => {
  // Make request to the server
  dispatch(resetPasswordRequest(user));
  // Pass the function to fetch the API endpoint and verify data passed
  resetPassword(user).then(
    (user) => {
      // If reset password is successfull
      // Pass the response of the user via success method
      dispatch(resetPasswordSuccess(user));
      // Redirect the user to login page
      history.push('/auth/login');
      // Pass notification to show user that password was reset successful
      notify('success', 'Success', user.message);
    },
    (error) => {
      error.then((response) => {
        dispatch(resetPasswordFailure(response.message));
        dispatch(alertActions.error(response.message));
      });
    },
  );
};
const userProfileRequest = () => ({
  type: userConstants.USER_PROFILE_REQUEST,
});
const userProfileSuccess = user => ({
  type: userConstants.USER_PROFILE_SUCCESS,
  user,
});
const userProfileFailure = error => ({
  type: userConstants.USER_PROFILE_FAILURE,
  error,
});

// User Profile action that call user profile endpoint
export const userProfileAction = () => (dispatch) => {
  dispatch(userProfileRequest());
  userProfile().then(
    (user) => {
      // Pass the results of the user to dashboard
      dispatch(userProfileSuccess(user.user_details));
    },
    (error) => {
      // In case of any error response, pass it to the user.
      error.then((response) => {
        dispatch(userProfileFailure(response.message));
        // Pass notification
        notify('error', 'Error', response.message);
      });
    },
  );
};
const logoutUser = () => ({
  type: userConstants.LOGOUT_USER,
});

const logoutError = error => ({
  type: userConstants.LOGOUT_ERROR,
  error,
});
function logout() {
  return (dispatch) => {
    userServices.logout().then(
      (user) => {
        dispatch(logoutUser(user));
        localStorage.removeItem('access_token');
        history.push('/');
        notify('success', 'Success', user.message);
      },
      (error) => {
        error.then((response) => {
          dispatch(logoutError(response.message));
          notify('error', 'Error', response.message);
        });
      },
    );
  };
}

export const userActions = {
  register,
  login,
  logout,
};
