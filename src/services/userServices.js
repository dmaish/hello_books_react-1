import {accessToken} from "../helpers/token";

export const userServices = {
	register,
	login,
	logout
};

function register(user) {
	const requestOptions = {
		method: "POST",
		headers: {"Content-Type": "application/json"},
		body: JSON.stringify(user)
	};
	return fetch("https://stark-falls-93345.herokuapp.com/auth/register",
		requestOptions)
		.then(handleResponse);
}

function login(user) {
	const requestOptions = {
		method: "POST",
		headers: {"Content-Type": "application/json"},
		body: JSON.stringify(user)
	};
	return fetch("https://stark-falls-93345.herokuapp.com/auth/login",
		requestOptions)
		.then(handleResponse);
}

function logout() {
	const requestOptions = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			AccessControlAllowOrigin:"https://stark-falls-93345.herokuapp.com",
			"Authorization": `Bearer ${accessToken()["access_token"]}`
		}
	};
	return fetch("https://stark-falls-93345.herokuapp.com/auth/logout",
		requestOptions)
		.then(handleResponse);
}

function resetpassword(user) {
	const requestOptions = {
		method: "POST",
		headers: {"Content-Type": "application/json"},
		body: JSON.stringify(user)
	};
	return fetch("https://stark-falls-93345.herokuapp.com/auth/reset-password",
		requestOptions)
		.then(handleResponse);
}

function handleResponse(response) {
	if (!response.ok) {
		return Promise.reject(response.json());
	}
	return response.json();

}
