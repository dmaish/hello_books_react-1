import {booksConstants} from "../actions/actionTypes";

export function getBooks(state = {
	loading:false,
	books:[],
	errors:{}
}, actions){
	switch(actions.type) {
	case booksConstants.BOOKS_REQUEST:
		return {...state, loading:true};
	case booksConstants.BOOKS_SUCCESS:
		return {...state, books:actions.books, loading:false};
	case booksConstants.BOOKS_FAILURE:
		return {...state, loading:false, errors:actions.error};
	default:
		return state;
	}
}

export function gettingBook(state = {
	loading:false,
	book:{},
	error:{}
}, action){
	switch(action.type){
	case booksConstants.SINGLE_BOOK_REQUEST:
		return {...state, loading:true};
	case booksConstants.SINGLE_BOOK_SUCCESS:
		return {...state, book:action.book, loading:false};
	case booksConstants.SINGLE_BOOK_FAILURE:
		return {...state, loading:false, error:action.error};
	default:
	return state;
	}
}

export function addBook(state = {}, {type}){
	switch(type){
	case booksConstants.ADD_BOOK_REQUEST:
		return {};
	case booksConstants.ADD_BOOK_SUCCESS:
		return {};
	case booksConstants.ADD_BOOK_FAILURE:
		return {};
	default:
		return state;
	}
}

export function editingBook(state = {
	loading: false,
	book:{},
	error:{}
}, action){
	switch(action.type){
		case booksConstants.EDIT_BOOK_REQUEST:
			return {...state, loading:true};
		case booksConstants.EDIT_BOOK_SUCCESS:
			return {...state, loading:false, book:action.book};
		case booksConstants.EDIT_BOOK_FAILURE:
			return {...state, loading:false, error:action.error}
		default:
			return state;
	}
}
