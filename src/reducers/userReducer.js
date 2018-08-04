import {userConstants} from "../actions/actionTypes";

export function registration(state = {}, {type}) {
	switch (type) {
	case userConstants.REGISTER_REQUEST:
		return {registering: true};
	case userConstants.REGISTER_SUCCESS:
		return {};
	case userConstants.REGISTER_FAILURE:
		return {};
	default:
		return state;
	}
}

export function login(state = {}, {type}) {
	switch (type) {
	case userConstants.LOGIN_REQUEST:
		return {
			loggingin: true
		};
	case userConstants.LOGIN_SUCCESS:
		return {};
	case userConstants.LOGIN_FAILURE:
		return {};
	default:
		return state;
	}
}

export function logoutReducer(state = {
	loggedOut: false
}, action) {
	switch (action.type) {
	case userConstants.LOGOUT_USER:
		return {...state, loggedOut:true};
	default:
		return state;

	}
}
