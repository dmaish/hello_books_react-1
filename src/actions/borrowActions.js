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
					dispatch(borrowSuccess(book));
					history.push("/api/v1/dashboard");
					dispatch(alertActions.success(book.message));
				}
			);
	};
}

function borrowSuccess(book_id){
	return {
		type: borrowConstants.BORROW_SUCCESS,
		book_id
	};
}

function returnBook(book_id) {
	return dispatch => {
		borrowServices.returnBook(book_id)
			.then(
				book => {
					dispatch(returnSuccess(book));
					history.push("/api/v1/dashboard");
					dispatch(alertActions.success(book.message));
				}
			);
	};
}

function returnSuccess(book_id){
	return {
		type: borrowConstants.RETURN_SUCCESS,
		book_id
	};
}
