import {borrowConstants} from "./borrowTypes";
import {borrowServices} from "../services/borrowServices";
import {alertActions} from "./alertActions";

export const borrowHistory = {
	returnBorrowHistory
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
