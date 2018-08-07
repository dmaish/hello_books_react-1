/**
*  Actions triggerred when user borrow book, return book
*/

import {borrowConstants} from "./borrowTypes";
import {borrowServices} from "../services/borrowServices";
import {alertActions} from "./alertActions";
import {history} from "../helpers/history";

export const borrow = (bookId) => {
	return dispatch => {
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

const borrowSuccess = (book) => {
	return {
		type: borrowConstants.BORROW_SUCCESS,
		book
	};
};

const borrowFailure = () => {
	return {
		type: borrowConstants.BORROW_FAILURE
	};
};

export const returnBook = (bookId) => {
	return dispatch => {
		borrowServices.returnBook(bookId)
			.then(
				book => {
					dispatch(returnSuccess(book.book_borrowed));
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

const returnSuccess = (book) => {
	return {
		type: borrowConstants.RETURN_SUCCESS,
		book
	};
};

const returnFailure = () => {
	return {
		type: borrowConstants.RETURN_FAILURE
	};
};
