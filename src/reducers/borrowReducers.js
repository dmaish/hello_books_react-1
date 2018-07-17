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
	borrows: [],
	error: {}
}, actions) {
	switch(actions.type) {
	case borrowConstants.BORROW_HISTORY_REQUEST:
		return {...state, loading:true};
	case borrowConstants.BORROW_HISTORY_SUCCESS:
		return {...state, borrows:actions.borrows, loading:false};
	case borrowConstants.BORROW_HISTORY_FAILURE:
		return {...state, error:actions.error, loading:false};
	default:
		return state;
	}
}

export function unReturnedBooks(state = {}, {type}) {
	switch(type){
	case borrowConstants.UNRETURNED_REQUEST:
		return {};
	case borrowConstants.UNRETURNED_SUCCESS:
		return {};
	case borrowConstants.UNRETURNED_FAILURE:
		return {};
	default:
		return state;
	}
}
