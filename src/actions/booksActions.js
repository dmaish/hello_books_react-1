
import {booksServices} from "../services/booksServices";
import {booksConstants} from "./actionTypes";
import {alertActions} from "./alertActions";
import {history} from "../helpers/history";

export const booksActions = {
	getBooks,
	addBook,
	getBook
};

function addBook(book) {
	return dispatch => {
		dispatch(requestAddBook(book));
		booksServices.addBook(book)
			.then(
				book => {
					dispatch(addedBook(book));
					history.push("/api/v1/secret/admin/dashboard");
					dispatch(alertActions.success("Added book successfully."));
				},
				error => {
					dispatch(addedBookFailure(error));
					dispatch(alertActions.error(error));
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

function getBooks() {
	return dispatch => {
		dispatch(requestBooks());
		booksServices.getBooks()
			.then(
				books => {
					dispatch(receiveBooks(books));
					dispatch(alertActions.success("Books found"));
				},
				error => {
					dispatch(failureBooks(error));
					dispatch(alertActions.error(error));
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

function getBook() {
	return dispatch => {
		dispatch(getBookRequest());
		booksServices.getBook()
			.then(
				book => {
					dispatch(receiveBook(book));
					dispatch(alertActions.success("Book was found successfully."));
				},
				error => {
					dispatch(theBookNotFound(error));
					dispatch(alertActions.error(error));
				}
			);
	};
	function getBookRequest(){
		return {
			type: booksConstants.SINGLE_BOOK_REQUEST,
		};
	}
	function receiveBook(book) {
		return {
			type: booksConstants.SINGLE_BOOK_SUCCESS,
			book
		};
	}
	function theBookNotFound(error) {
		return {
			type: booksConstants.SINGLE_BOOK_FAILURE,
			error
		};
	}
}
