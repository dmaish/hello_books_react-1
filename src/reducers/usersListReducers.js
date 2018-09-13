/**
 * It contains getting users in the system reducer
 */

import { usersListsTypes } from '../actions/actionTypes';

export function usersListReducer(
  state = {
    loading: false,
    users: [],
    error: {},
  },
  actions,
) {
  switch (actions.type) {
    case usersListsTypes.USERS_REQUEST:
      return { ...state, loading: true };
    case usersListsTypes.USERS_SUCCESS:
      return { ...state, loading: false, users: actions.users };
    case usersListsTypes.USERS_FAILURE:
      return { ...state, loading: false, error: actions.error };
    default:
      return state;
  }
}
