import {accessToken} from "../helpers/token";

export const booksServices = {
	addBook,
	getBooks,
	getBook,
	editBook,
	deleteBook
};

function addBook(book) {
	const requestOptions = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			AccessControlAllowOrigin:"https://stark-falls-93345.herokuapp.com",
			"Authorization": `Bearer ${accessToken()["access_token"]}`
		},
		body: JSON.stringify(book)
	};
	return fetch("https://stark-falls-93345.herokuapp.com/books",
		requestOptions)
		.then(handleResponse);
}

function editBook(bookData) {
	console.log("Data is ", bookData);
	// let book_id = this.state.book.book_id;
	let book_id = 9675;
	const requestOptions = {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
			AccessControlAllowOrigin:"https://stark-falls-93345.herokuapp.com",
			"Authorization": `Bearer ${accessToken()["access_token"]}`
		},
		body: JSON.stringify(bookData)
	};
	return fetch(`https://stark-falls-93345.herokuapp.com/books/${book_id}`,
		requestOptions)
		.then(handleResponse);
}

function getBooks() {
	const requestOptions = {
		method: "GET"
	};
	return fetch("http://stark-falls-93345.herokuapp.com/books",
		requestOptions)
		.then(handleResponse);
}

function getBook(book_id) {
	const requestOptions = {
		method: "GET"
	};
	return fetch(`https://stark-falls-93345.herokuapp.com/books/${book_id}`,
		requestOptions)
		.then(handleResponse);
}

function deleteBook(book_id) {
	const requestOptions = {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${accessToken()["access_token"]}`
		}
	};
	return fetch(`https://stark-falls-93345.herokuapp.com/books/${book_id}`,
		requestOptions)
		.then(handleResponse);
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
