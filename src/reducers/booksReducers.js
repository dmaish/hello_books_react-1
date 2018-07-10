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

export function getBook(book = {}, {type}){
	switch(type){
	case booksConstants.SINGLE_BOOK_REQUEST:
		return {};
	case booksConstants.SINGLE_BOOK_SUCCESS:
		return book;
	case booksConstants.SINGLE_BOOK_FAILURE:
		return {};
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
