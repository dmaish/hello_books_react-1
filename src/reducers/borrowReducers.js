import {borrowConstants} from "../actions/borrowTypes";

export function borrowReducer(state = {
	borrowing: false,
	book_id: "",
	error: {}
}, actions){
	switch(actions.type) {
	case borrowConstants.BORROW_SUCCESS:
		return {...state, borrowing:false, book_id:actions.book_id};
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
	case borrowConstants.RETURN_SUCCESS:
		return {...state, returning:false, book_id:actions.book_id};
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
	switch(actions.type){
	case borrowConstants.UNRETURNED_REQUEST:
		return {...state, loading:true};
	case borrowConstants.UNRETURNED_SUCCESS:
		return {...state, loading:false, books:actions.books};
	case borrowConstants.UNRETURNED_FAILURE:
		return {...state, loading:false, error:actions.error};
	default:
		return state;
	}
}
