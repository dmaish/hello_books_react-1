/**
 *  Action triggerred when admin is getting list of all users
 */

import { usersList } from '../services/usersListServices';
import { usersListsTypes } from './actionTypes';

const requestUsers = () => ({
  type: usersListsTypes.USERS_REQUEST,
});

const getUsersSuccess = users => ({
  type: usersListsTypes.USERS_SUCCESS,
  users,
});

const getUsersFailure = error => ({
  type: usersListsTypes.USERS_FAILURE,
  error,
});
const usersListActions = () => (dispatch) => {
  dispatch(requestUsers());
  usersList().then(
    (users) => {
      dispatch(getUsersSuccess(users));
    },
    (error) => {
      error.then((response) => {
        dispatch(getUsersFailure(response.message));
      });
    },
  );
};

export default usersListActions;
