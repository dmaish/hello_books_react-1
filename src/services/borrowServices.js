import {accessToken} from "../helpers/token";

export const borrowServices = {
	borrow,
	returnBook,
	borrowHistory,
	unReturnedBooks
};

function borrow(book_id) {
	const requestOptions = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"access_token": accessToken()["access_token"]
		}};
	return fetch("https://stark-falls-93345.herokuapp.com/users/books:book_id",
		requestOptions)
		.then(
			handleResponse
		);
}

function returnBook(book_id) {
	const requestOptions = {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
			"access_token": accessToken()["access_token"]
		}
	};
	return fetch("https://stark-falls-93345.herokuapp.com/users/books:book_id",
		requestOptions)
		.then(
			handleResponse
		);
}

function borrowHistory() {
	const requestOptions = {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			"access_token": accessToken()["access_token"]
		}
	};
	return fetch("https://stark-falls-93345.herokuapp.com/users/books",
		requestOptions)
		.then(
			handleResponse
		);
}

function unReturnedBooks() {
	const requestOptions = {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			"access_token": accessToken()["access_token"]
		}
	};
	return fetch("https://stark-falls-93345.herokuapp.com/users/books?returned=false",
		requestOptions)
		.then(
			handleResponse
		);
}

function handleResponse(response) {
	if(!response.ok) {
		response.json().then(data=>{
			console.log(data);
		}).catch(err=>{
			console.log(err);
		});
		return Promise.reject(response.statusText);

	}
	return response.json();
}
