/**
*  Actions triggerred when getting borrowing history or
* books borrowed but yet to return
*/

import {borrowConstants} from "./borrowTypes";
import {borrowServices} from "../services/borrowServices";
import {history} from "../helpers/history";

export const borrowHistory = {
	returnBorrowHistory,
	unReturnBooksHistory
};

function returnBorrowHistory(page = 1) {
	return dispatch => {
		dispatch(requestHistory());
		borrowServices.borrowHistory(page)
			.then(
				books => {
					dispatch(receiveHistory(books));
				},
				error => {
					if (error.message === "Failed to fetch"){
						history.push("/internetissues");
					}
					else(
						error.then(response => {
							dispatch(historyFailure(response.message));
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
					dispatch(receiveUnreturnHistory(books));
				},
				error => {
					if (error.message === "Failed to fetch"){
						history.push("/internetissues");
					}
					else(
						error.then(response => {
							dispatch(unreturnHistoryFailure(response.message));
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
