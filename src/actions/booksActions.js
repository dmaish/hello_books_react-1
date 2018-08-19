/**
*  Actions triggerred when book is added, edited, deleted
* or when getting book or books
*/

import {booksServices, featuredbooksService} from "../services/booksServices";
import {booksConstants} from "./actionTypes";
import {alertActions} from "./alertActions";
import {history} from "../helpers/history";

export const booksActions = {
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
					history.push("/secret/admin/dashboard");
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
					history.push("/secret/admin/dashboard");
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

function requestEditBook(bookId) {
	return {
		type: booksConstants.EDIT_BOOK_REQUEST,
		bookId
	};
}

function editedBook(book, bookId) {
	return {
		type: booksConstants.EDIT_BOOK_SUCCESS,
		book,
		bookId
	};
}

function editBookFailure(error) {
	return {
		type: booksConstants.EDIT_BOOK_FAILURE,
		error
	};
}

export const getBooks = (page = 1) => {
	return dispatch => {
		dispatch(requestBooks());
		booksServices.getBooks(page)
			.then(
				books => {
					dispatch(receiveBooks(books));
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
};

export const featuredBooksAction = () => {
	return dispatch => {
		dispatch(requestBooks());
		featuredbooksService()
			.then(
				books => {
					dispatch(receiveBooks(books));
				},
				error => {
					error.then(response => {
						dispatch(failureBooks(response.message));
					});
				}
			);
	};
};

const requestBooks = () => {
	return {
		type: booksConstants.BOOKS_REQUEST
	};
};
const receiveBooks = (books) => {
	return {
		type: booksConstants.BOOKS_SUCCESS,
		books
	};
};
const failureBooks = (error) => {
	return {
		type: booksConstants.BOOKS_FAILURE,
		error
	};
};

function getBook(bookId) {
	return dispatch => {
		dispatch(getBookRequest(bookId));
		booksServices.getBook()
			.then(
				book => {
					dispatch(receiveBook(book));
				},
				error => {
					if (error.message === "Failed to fetch"){
						history.push("/internetissues");
					}
					else(
						error.then(response => {
							dispatch(theBookNotFound(response.message));
						}));
				}
			);
	};
	function getBookRequest(bookId){
		return {
			type: booksConstants.SINGLE_BOOK_REQUEST,
			bookId
		};
	}
	function receiveBook(bookId) {
		return {
			type: booksConstants.SINGLE_BOOK_SUCCESS,
			bookId
		};
	}
	function theBookNotFound(error) {
		return {
			type: booksConstants.SINGLE_BOOK_FAILURE,
			error
		};
	}
}

export const deleteBookAction = (bookId) => {
	return dispatch => {
		deleteBookRequest(bookId);
		booksServices.deleteBook(bookId)
			.then(
				book => {
					dispatch(deleteBookSuccess(book.message, bookId));
					history.push("/secret/admin/dashboard");
					dispatch(alertActions.success(book.message));
				},
				error => {
					if (error.message === "Failed to fetch"){
						history.push("/internetissues");
					}
					else(
						error.then(response => {
							dispatch(deleteBookFailure(response.message));
							dispatch(alertActions.error(response.message));
						}));
				}
			);
	};

};

const deleteBookSuccess = (book, bookId) => {
	return {
		type: booksConstants.DELETE_BOOK_SUCCESS,
		bookId,
		book
	};
};

const deleteBookRequest = (bookId) => {
	return {
		type: booksConstants.DELETE_BOOK_REQUEST,
		bookId
	};
};

const deleteBookFailure = (error) => {
	return {
		type: booksConstants.DELETE_BOOK_FAILURE,
		error
	};
};
