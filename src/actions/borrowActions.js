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
		dispatch(requestBorrow);
	};
}

function requestBorrow() {

}

function borrowSuccess(){

}

function borrowFailure(){

}

function returnBook(book_id) {
	return dispatch => {
		dispatch(requestReturn);
	};
}

function requestReturn(){

}

function returnSuccess(){

}

function returnFailure(){

}
