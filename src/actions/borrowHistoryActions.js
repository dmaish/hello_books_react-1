/**
*  Actions triggerred when getting borrowing history or
* books borrowed but yet to return
*/

import {borrowConstants} from "./borrowTypes";
import {borrowServices} from "../services/borrowServices";
import {alertActions} from "./alertActions";

export const borrowHistory = {
	returnBorrowHistory,
	unReturnBooksHistory
};

function returnBorrowHistory() {
	return dispatch => {
		dispatch(requestHistory());
		borrowServices.borrowHistory()
			.then(
				books => {
					dispatch(receiveHistory(books.all_borrowed_books));
					dispatch(alertActions.success(books.message));
				},
				error => {
					if (error.message === "Failed to fetch"){
						history.push("/internetissues");
					}
					else(
						error.then(response => {
							dispatch(historyFailure(response.message));
							dispatch(alertActions.error(response.message));
						}));
				}
			);
	};
}

function requestHistory() {
	return {
		type: borrowConstants.BORROW_HISTORY_REQUEST
	};
}

function receiveHistory(books) {
	return {
		type: borrowConstants.BORROW_HISTORY_SUCCESS,
		books
	};
}

function historyFailure(error){
	return {
		type: borrowConstants.BORROW_HISTORY_FAILURE,
		error
	};
}

function unReturnBooksHistory(){
	return dispatch => {
		dispatch(requestUnreturnHistory());
		borrowServices.unReturnedBooks()
			.then(
				books => {
					dispatch(receiveUnreturnHistory(books.un_returned_books));
					dispatch(alertActions.success(books.message));
				},
				error => {
					if (error.message === "Failed to fetch"){
						history.push("/internetissues");
					}
					else(
						error.then(response => {
							dispatch(unreturnHistoryFailure(response.message));
							dispatch(alertActions.error(response.message));
						}));
				}
			);
	};
}

function requestUnreturnHistory(){
	return {
		type: borrowConstants.UNRETURNED_REQUEST
	};
}

function receiveUnreturnHistory(books) {
	return {
		type: borrowConstants.UNRETURNED_SUCCESS,
		books
	};
}

function unreturnHistoryFailure(error) {
	return {
		type: borrowConstants.UNRETURNED_FAILURE,
		error
	};
}
