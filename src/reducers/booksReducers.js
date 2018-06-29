import {booksConstants} from "../actions/actionTypes";

export function getBooks(books = [], {type}){
	switch(type) {
	case booksConstants.BOOKS_SUCCESS:
		return books;
	default:
		return books;
	}
}
