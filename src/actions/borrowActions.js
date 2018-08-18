/**
*  Actions triggerred when user borrow book, return book
*/

import {borrowConstants} from "./borrowTypes";
import {borrowServices} from "../services/borrowServices";
import {alertActions} from "./alertActions";
import {history} from "../helpers/history";

export const borrow = (bookId) => {
	return dispatch => {
		dispatch(borrowRequest(bookId));
		borrowServices.borrow(bookId)
			.then(
				book => {
					dispatch(borrowSuccess(book.book_borrowed));
					history.push("/api/v1/dashboard");
					dispatch(alertActions.success(book.message));
				},
				error => {
					if (error.message === "Failed to fetch"){
						history.push("/internetissues");
					}
					else(
						error.then(response => {
							dispatch(borrowFailure(response.message));
							dispatch(alertActions.error(error.message));
						})
					);
				}
			);
	};
};

const borrowRequest = (bookId) => {
	return {
		type: borrowConstants.BORROW_REQUEST,
		bookId
	};
};

const borrowSuccess = (book) => {
	return {
		type: borrowConstants.BORROW_SUCCESS,
		book
	};
};

const borrowFailure = (error) => {
	return {
		type: borrowConstants.BORROW_FAILURE,
		error
	};
};

export const returnBook = (bookId) => {
	return dispatch => {
		dispatch(returnRequest(bookId));
		borrowServices.returnBook(bookId)
			.then(
				book => {
					dispatch(returnSuccess(book.message, bookId));
					history.push("/api/v1/dashboard");
					dispatch(alertActions.success(book.message));
				},
				error => {
					if (error.message === "Failed to fetch"){
						history.push("/internetissues");
					}
					else(
						error.then(response => {
							dispatch(returnFailure(response.message));
						})
					);
				}
			);
	};
};

const returnRequest = (bookId) => {
	return {
		type: borrowConstants.RETURN_REQUEST,
		bookId
	};
};

const returnSuccess = (book, bookId) => {
	return {
		type: borrowConstants.RETURN_SUCCESS,
		book,
		bookId
	};
};

const returnFailure = (error) => {
	return {
		type: borrowConstants.RETURN_FAILURE,
		error
	};
};
