import {booksConstants} from "../actions/actionTypes";

export function getBooks(books = [], {type}){
	switch(type) {
	case booksConstants.BOOKS_REQUEST:
		return {};
	case booksConstants.BOOKS_SUCCESS:
		return books;
	case booksConstants.BOOKS_FAILURE:
		return {};
	default:
		return books;
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
