/**
* It contains borrow, return, borrow history reducers
*/

import {borrowConstants} from "../actions/borrowTypes";

export function borrowReducer(state = {
	borrowing: false,
	book_id: "",
	error: {}
}, actions){
	switch(actions.type) {
	case borrowConstants.BORROW_REQUEST:
		return {...state, borrowing:true}
	case borrowConstants.BORROW_SUCCESS:
		return {...state, borrowing:false, book_id:actions.book_id};
	case borrowConstants.BORROW_FAILURE:
		return {...state, borrowing:false, error:actions.error}
	default:
		return state;
	}
}

export function returnBookReducer(state = {
	returning: false,
	book_id: "",
	error: {}
}, actions) {
	switch(actions.type) {
	case borrowConstants.RETURN_REQUEST:
		return {...state, returning:true}
	case borrowConstants.RETURN_SUCCESS:
		return {...state, returning:false, book_id:actions.book_id};
	case borrowConstants.RETURN_FAILURE:
		return {...state, returning:false, error:actions.error}
	default:
		return state;
	}
}

export function borrowHistoryReducer(state = {
	loading: false,
	books: [],
	error: {}
}, actions) {
	switch(actions.type) {
	case borrowConstants.BORROW_HISTORY_REQUEST:
		return {...state, loading:true};
	case borrowConstants.BORROW_HISTORY_SUCCESS:
		return {...state, books:actions.books, loading:false};
	case borrowConstants.BORROW_HISTORY_FAILURE:
		return {...state, error:actions.error, loading:false};
	default:
		return state;
	}
}

export function unReturnedBooksReducer(state = {
	loading: false,
	books: [],
	error: {}
}, actions) {
	const currentUnreturnedBooks = state.books.un_returned_books || state.books;
	let newUnreturnedBooks = {...state.books};
	switch(actions.type){
	case borrowConstants.UNRETURNED_REQUEST:
		return {...state, loading:true};
	case borrowConstants.UNRETURNED_SUCCESS:
		return {...state, books:actions.books, loading:false};
	case borrowConstants.UNRETURNED_FAILURE:
		return {...state, error:actions.error, loading:false};
	case borrowConstants.RETURN_SUCCESS:
		// remove book from unreturned books list
		newUnreturnedBooks.un_returned_books =  currentUnreturnedBooks.filter(
			book => book.book_id !== actions.bookId
		);
		return {...state, books:newUnreturnedBooks};
	case borrowConstants.BORROW_SUCCESS:
		// update unreturnd book with newly borrowed book
		newUnreturnedBooks.un_returned_books =  [...currentUnreturnedBooks, actions.book];
		// return new state with new list of unreturned books
		return {...state, books:newUnreturnedBooks};
	default:
		return state;
	}
}
