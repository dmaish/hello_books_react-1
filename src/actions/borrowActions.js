/**
*  Actions triggerred when user borrow book, return book 
*/

import {borrowConstants} from "./borrowTypes";
import {borrowServices} from "../services/borrowServices";
import {alertActions} from "./alertActions";
import {history} from "../helpers/history";

export const borrowActions = {
	borrow,
	returnBook
};

function borrow(book_id) {
	return dispatch => {
		borrowServices.borrow(book_id)
			.then(
				book => {
					dispatch(borrowSuccess(book.book_borrowed));
					history.push("/api/v1/dashboard");
					dispatch(alertActions.success(book.message));
				}
			);
	};
}

function borrowSuccess(book){
	return {
		type: borrowConstants.BORROW_SUCCESS,
		book
	};
}

function returnBook(book_id) {
	return dispatch => {
		borrowServices.returnBook(book_id)
			.then(
				book => {
					dispatch(returnSuccess(book.book_borrowed));
					history.push("/api/v1/dashboard");
					dispatch(alertActions.success(book.message));
				}
			);
	};
}

function returnSuccess(book){
	return {
		type: borrowConstants.RETURN_SUCCESS,
		book
	};
}
