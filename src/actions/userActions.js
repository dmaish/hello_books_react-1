/**
*  Actions triggerred when user is registering, logging in
* Resetting password and logging out
*/

import {userConstants} from "./actionTypes";
import {userServices} from "../services/userServices";
import {resetPassword} from "../services/userServices";
import {alertActions} from "./alertActions";
import {history} from "../helpers/history";

export const userActions = {
	register,
	login,
	logout
};

function register(user) {
	return dispatch => {
		dispatch(requestRegister(user));
		userServices.register(user)
			.then(
				user => {
					dispatch(successRegister(user));
					dispatch(alertActions.success(user.message));
					history.push("/auth/login");
				},
				error => {
					error.then(response => {
						dispatch(failureRegister(response.message));
						dispatch(alertActions.error(response.message));
					});
				}
			);
	};
	function requestRegister (user) {
		return {
			type: userConstants.REGISTER_REQUEST,
			user
		};
	}
	function successRegister (user) {
		return {
			type: userConstants.REGISTER_SUCCESS,
			user
		};
	}
	function failureRegister (error) {
		return {
			type: userConstants.REGISTER_FAILURE,
			error
		};
	}
}

function login(user) {
	return dispatch => {
		dispatch(requestLogin(user));
		userServices.login(user)
			.then(
				user => {
					dispatch(successLogin(user));
					localStorage.setItem("access_token", JSON.stringify(user.access_token));
					if (user.email.endsWith("@hellobookslibrary.com")){
						history.push("/secret/admin/dashboard");
					}
					else {
						history.push("/dashboard");
					}
					dispatch(alertActions.success(user.message));
				},
				error => {
					error.then(response => {
						dispatch(failureLogin(response.message));
						dispatch(alertActions.error(response.message));
					});
				}
			);
	};
	function requestLogin (user) {
		return {
			type: userConstants.LOGIN_REQUEST,
			isFetching: true,
			isAuthenticated: false,
			user
		};
	}
	function successLogin (user) {
		return {
			type: userConstants.LOGIN_SUCCESS,
			isFetching: false,
			isAuthenticated: true,
			access_token: user.access_token
		};
	}
	function failureLogin (error) {
		return {
			type: userConstants.LOGIN_FAILURE,
			isFetching: false,
			isAuthenticated: false,
			error
		};
	}
}

export const resetPasswordAction = (user) => {
	return dispatch => {
		dispatch(resetPasswordRequest(user));
		resetPassword(user)
			.then(
				user => {
					dispatch(resetPasswordSuccess(user));
					history.push("/auth/login");
					dispatch(alertActions.success(user.message));
				},
				error => {
					error.then(response => {
						dispatch(resetPasswordFailure(response.message));
						dispatch(alertActions.error(response.message));
					});
				}
			);
	};
};

const resetPasswordRequest = (user) => {
	return {
		type: userConstants.RESET_PASSWORD_REQUEST,
		user
	};
};

const resetPasswordSuccess = (user) => {
	return {
		type: userConstants.RESET_PASSWORD_SUCCESS,
		user
	};
};

const resetPasswordFailure = (error) => {
	return {
		type: userConstants.RESET_PASSWORD_FAILURE,
		error
	};
};

function logout() {
	return dispatch => {
		userServices.logout()
			.then(
				user => {
					dispatch(logoutUser(user));
					localStorage.removeItem("access_token");
					history.push("/");
					dispatch(alertActions.success(user.message));
				},
				error => {
					error.then(response => {
						dispatch(logoutError(response.message));
						dispatch(alertActions.error(response.message));
					});
				}
			);

	};
}


const logoutUser = () => {
	return {
		type: userConstants.LOGOUT_USER
	};
};

const logoutError = (error) => {
	return {
		type: userConstants.LOGOUT_ERROR,
		error
	};
};
