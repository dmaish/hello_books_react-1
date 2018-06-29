import accessToken from "../helpers/token";

export const booksServices = {
	addBook,
	editBook,
	deleteBook,
	getBooks,
	getBook
};

function addBook(bookDetails) {
	const requestOptions = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"access_token": accessToken()["access_token"]
		},
		body: JSON.stringify(bookDetails)
	};
	return fetch("https://stark-falls-93345.herokuapp.com/books/",
		requestOptions)
		.then(handleResponse);
}

function getBooks(books) {
	const requestOptions = {
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(books)
	};
	return fetch("https://stark-falls-93345.herokuapp.com/books/",
		requestOptions)
		.then(handleResponse);
}

function getBook(book) {
	const requestOptions = {
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(book)
	};
	return fetch("https://stark-falls-93345.herokuapp.com/books/:book_id",
		requestOptions)
		.then(handleResponse);
}

function editBook(book_id) {
	const requestOptions = {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
			"access_token": accessToken()["access_token"]
		},
		body: JSON.stringify(bookDetails)
	};
	return fetch("https://stark-falls-93345.herokuapp.com/books/:book_id",
		requestOptions)
		.then(handleResponse);
}

function deleteBook(book_id) {
	const requestOptions = {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
			"access_token": accessToken()["access_token"]
		}
	};
	return fetch("https://stark-falls-93345.herokuapp.com/books/:book_id",
		requestOptions)
		.then(handleResponse);
}

function handleResponse(response) {
	if(!response.ok) {
		return Promise.reject(response.statusText);
	}
	return response.json();
}
