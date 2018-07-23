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
					dispatch(receiveHistory(books));

				},
				error => {
					dispatch(historyFailure(error));
					dispatch(alertActions.error(error));
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
					dispatch(unreturnHistoryFailure(error));
					dispatch(alertActions.error(error));
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
