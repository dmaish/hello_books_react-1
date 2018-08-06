/**
*  Actions triggerred when book is added, edited, deleted
* or when getting book or books
*/

import {booksServices} from "../services/booksServices";
import {booksConstants} from "./actionTypes";
import {alertActions} from "./alertActions";
import {history} from "../helpers/history";

export const booksActions = {
	getBooks,
	addBook,
	getBook,
	editBook
};

function addBook(book) {
	return dispatch => {
		dispatch(requestAddBook(book));
		booksServices.addBook(book)
			.then(
				book => {
					dispatch(addedBook(book));
					history.push("/api/v1/secret/admin/dashboard");
					dispatch(alertActions.success(book.message));
				},
				error => {
					if (error.message === "Failed to fetch"){
						history.push("/internetissues");
					}
					else (
						error.then(response => {
							dispatch(addedBookFailure(response.message));
							dispatch(alertActions.error(response.message));
						}));
				}
			);
	};
}

function requestAddBook(book){
	return {
		type: booksConstants.ADD_BOOK_REQUEST,
		book
	};
}

function addedBook(book) {
	return {
		type: booksConstants.ADD_BOOK_SUCCESS,
		book
	};
}

function addedBookFailure(error){
	return {
		type: booksConstants.ADD_BOOK_FAILURE,
		error
	};
}

function editBook(book) {
	return dispatch => {
		dispatch(requestEditBook(book));
		booksServices.editBook(book)
			.then(
				book => {
					dispatch(editedBook(book));
					history.push("/api/v1/secret/admin/dashboard");
					dispatch(alertActions.success(book.message));
				},
				error => {
					if (error.message === "Failed to fetch"){
						history.push("/internetissues");
					}
					else(
						error.then(response => {
							dispatch(editBookFailure(response.message));
							dispatch(alertActions.error(response.message));
						}));
				}
			);
	};
}

function requestEditBook(book) {
	return {
		type: booksConstants.EDIT_BOOK_REQUEST,
		book
	};
}

function editedBook(book) {
	return {
		type: booksConstants.EDIT_BOOK_SUCCESS,
		book
	};
}

function editBookFailure(error) {
	return {
		type: booksConstants.EDIT_BOOK_FAILURE,
		error
	};
}

function getBooks() {
	return dispatch => {
		dispatch(requestBooks());
		booksServices.getBooks()
			.then(
				books => {
					dispatch(receiveBooks(books));
					dispatch(alertActions.success(books.message));
				},
				error => {
					if (error.message === "Failed to fetch"){
						history.push("/internetissues");
					}
					else(
						error.then(response => {
							dispatch(failureBooks(response.message));
							dispatch(alertActions.error(response.message));
						}));
				}

			);
	};
	function requestBooks(){
		return {
			type: booksConstants.BOOKS_REQUEST
		};
	}
	function receiveBooks(books) {
		return {
			type: booksConstants.BOOKS_SUCCESS,
			books
		};
	}
	function failureBooks(error) {
		return {
			type: booksConstants.BOOKS_FAILURE,
			error
		};
	}
}

function getBook(book_id) {
	return dispatch => {
		dispatch(getBookRequest(book_id));
		booksServices.getBook()
			.then(
				book => {
					dispatch(receiveBook(book));
					dispatch(alertActions.success(book.message));
				},
				error => {
					if (error.message === "Failed to fetch"){
						history.push("/internetissues");
					}
					else(
						error.then(response => {
							dispatch(theBookNotFound(response.message));
							dispatch(alertActions.error(response.message));
						}));
				}
			);
	};
	function getBookRequest(){
		return {
			type: booksConstants.SINGLE_BOOK_REQUEST,
		};
	}
	function receiveBook(book_id) {
		return {
			type: booksConstants.SINGLE_BOOK_SUCCESS,
			book_id
		};
	}
	function theBookNotFound(error) {
		return {
			type: booksConstants.SINGLE_BOOK_FAILURE,
			error
		};
	}
}

export const deleteBookAction = (book_id) => {
	return dispatch => {
		deleteBookRequest(book_id);
		booksServices.deleteBook(book_id)
			.then(
				book => {
					dispatch(deleteBookSuccess(book));
					history.push("/api/v1/secret/admin/dashboard");
					dispatch(alertActions.success(book.message));
				},
				error => {
					if (error.message === "Failed to fetch"){
						history.push("/internetissues");
					}
					else(
						error.then(response => {
							dispatch(deleteBookFailure(response.message));
						}));
				}
			);
	};

};

const deleteBookSuccess = (book_id) => {
	return {
		type: booksConstants.DELETE_BOOK,
		book_id
	};
};

const deleteBookRequest = (book_id) => {
	return {
		type: booksConstants.DELETE_BOOK_REQUEST,
		book_id
	};
};

const deleteBookFailure = (error) => {
	return {
		type: booksConstants.DELETE_BOOK_FAILURE,
		error
	};
};
