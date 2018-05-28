import {userConstants} from "./actionTypes";
import {userServices} from "../services/userServices";
import {alertActions} from "./alertActions";
import {history} from "../helpers/history";

export const userActions = {
  register
}

function register(user) {
  return dispatch => {
    dispatch(request(user));
    userServices.register(user)
    .then(
      user => {
        dispatch(success());
        history.push('/auth/login');
        dispatch(alertActions.success(
          "Registration successfull."));
      },
      error => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      }
    );
  };
  function request (user) {return {type:
    userConstants.REGISTER_REQUEST, user}}
  function success (user) {return {type:
    userConstants.REGISTER_SUCCESS, user}}
  function failure (error) {return {type:
    userConstants.REGISTER_FAILURE, error}}
}
