import {booksConstants} from "../actions/actionTypes";

export function getBooks(books = [], {type}){
	switch(type) {
	case booksConstants.BOOKS_SUCCESS:
		return books;
	default:
		return books;
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
