import {userConstants} from "./actionTypes";
import {userServices} from "../services/userServices";
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
					history.push("/api/v1/auth/login");
					dispatch(alertActions.success(
						"Registration successfull."));
				},
				error => {
					dispatch(failureRegister(error));
					dispatch(alertActions.error(error));
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
					history.push("/api/v1/secret/admin/dashboard");
					dispatch(alertActions.success(
						"You have logged in successfully."
					));
				},
				error => {
					dispatch(failureLogin(error));
					dispatch(alertActions.error(error));
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

function logout() {
	userServices.logout();
	return dispatch => {
		dispatch(logoutUser());
		history.push("/");
		dispatch(alertActions.success(
			"You have logged out successfully."
		));
	};
}

function logoutUser() {
	return {
		type: userConstants.LOGOUT_USER,
	};
}
