import {accessToken} from "../helpers/token";

export const booksServices = {
	addBook,
	getBooks,
	getBook
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
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		}
	};
	return fetch(`https://stark-falls-93345.herokuapp.com/books/${book_id}`,
		requestOptions)
		.then(handleResponse);
}

// function editBook(book_id) {
// 	const requestOptions = {
// 		method: "PUT",
// 		headers: {
// 			"Content-Type": "application/json",
// 			"access_token": accessToken()["access_token"]
// 		},
// 		body: JSON.stringify(bookDetails)
// 	};
// 	return fetch("https://stark-falls-93345.herokuapp.com/books/:book_id",
// 		requestOptions)
// 		.then(handleResponse);
// }
//
// function deleteBook(book_id) {
// 	const requestOptions = {
// 		method: "DELETE",
// 		headers: {
// 			"Content-Type": "application/json",
// 			"access_token": accessToken()["access_token"]
// 		}
// 	};
// 	return fetch("https://stark-falls-93345.herokuapp.com/books/:book_id",
// 		requestOptions)
// 		.then(handleResponse);
// }

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
