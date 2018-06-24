import borrowConstants from "./borrowTypes";

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
