/**
*  Action triggerred when admin is getting list of all users
*/

import {usersList} from "../services/usersListServices";
import {usersListsTypes} from "./actionTypes";
import {alertActions} from "./alertActions";
import {history} from "../helpers/history";

const usersListActions = () => {
	return dispatch => {
		dispatch(requestUsers());
		usersList()
			.then(
				users => {
					dispatch(getUsersSuccess(users));
					dispatch(alertActions.success(users.message));
				},
				error => {
					if (error.message === "Failed to fetch"){
						history.push("/internetissues");
					}
					else(
						error.then(response => {
							dispatch(getUsersFailure(error));
							dispatch(alertActions.error(response.message));
						}));
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