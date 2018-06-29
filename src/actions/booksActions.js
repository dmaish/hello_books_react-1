
import {booksServices} from "../services/booksServices";
import {booksConstants} from "./actionTypes";
import {alertActions} from "./alertActions";

export const booksActions = {
	getBooks
};

function getBooks(books) {
	return dispatch => {
		dispatch(requestBooks(books));
		booksServices.getBooks(books)
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
	function requestBooks(books){
		return {
			type: booksConstants.BOOKS_REQUEST,
			books
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
