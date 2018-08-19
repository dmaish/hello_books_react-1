/**
*  Action triggerred when admin is getting list of all users
*/

import {usersList} from "../services/usersListServices";
import {usersListsTypes} from "./actionTypes";

const usersListActions = () => {
	return dispatch => {
		dispatch(requestUsers());
		usersList()
			.then(
				users => {
					dispatch(getUsersSuccess(users));
				},
				error => {
					error.then(response => {
						dispatch(getUsersFailure(response.message));
					});
				}
			);
	};
};

const requestUsers = () => {
	return {
		type: usersListsTypes.USERS_REQUEST
	};
};

const getUsersSuccess = (users) => {
	return {
		type: usersListsTypes.USERS_SUCCESS,
		users
	};
};

const getUsersFailure = (error) => {
	return {
		type: usersListsTypes.USERS_FAILURE,
		error
	};
};

export default usersListActions;
