/**
*  Actions triggerred when book is added, edited, deleted
* or when getting book or books
*/

//Major imports that is used by add, get, edit, delete books functionalities
import {booksServices, featuredbooksService} from "../services/booksServices";
import {booksConstants} from "./actionTypes";
import {history} from "../helpers/history";
import {notify} from "../helpers/notify";
import {alertActions} from "./alertActions";

// Export addBook, editBook and getBook as booksActions
export const booksActions = {
	addBook,
	getBook,
	editBook
};

// Function to add a book by the admin
function addBook(book) {
	return dispatch => {
		dispatch(requestAddBook(book));
		booksServices.addBook(book)
			.then(
				book => {
					// Dispatch function to add a book
					dispatch(addedBook(book));
					// Redirect the user to the admin dashboard
					history.push("/secret/admin/dashboard");
					notify("success", "Success", book.message);
				},
				error => {
					// Notify user on the error response received
					error.then(response => {
						dispatch(addedBookFailure(response.message));
						dispatch(alertActions.error(response.message));
					});
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

// Function to delete a book by the admin
function editBook(book) {
	return dispatch => {
		dispatch(requestEditBook(book));
		booksServices.editBook(book)
			.then(
				book => {
					dispatch(editedBook(book));
					// Push to admin dashboard after success of editing
					history.push("/secret/admin/dashboard");
					// Notify the user in case their is success
					notify("success", "Success", book.message);
				},
				error => {
					// Return response of the error received
					error.then(response => {
						// Dispatch user failure message to the reducers
						dispatch(editBookFailure(response.message));
						// Notify the user what went wrong in forms
						dispatch(alertActions.error(response.message));
					});
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
					error.then(response => {
						dispatch(failureBooks(response.message));
						notify("error", "Error", response.message);
					});
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
					error.then(response => {
						dispatch(theBookNotFound(response.message));
						notify("error", "Error", response.error);
					});
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
					notify("success", "Success", book.message);
				},
				error => {
					error.then(response => {
						dispatch(deleteBookFailure(response.message));
						notify("error", "Error", response.message);
					});
				}
			);
	};

};

const deleteBookSuccess = (book, bookId) => {
	return {
		type: booksConstants.DELETE_BOOK_SUCCESS,
		book,
		bookId
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
