/**
* It contains getting book/books, adding book, editing book
* and delete book reducers
*/


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

export function addBook(state = {
	loading: false,
	book: {},
	error: {}
}, actions){
	switch(actions.type){
	case booksConstants.ADD_BOOK_REQUEST:
		return {...state, loading:true, addingBook:true};
	case booksConstants.ADD_BOOK_SUCCESS:
		return {...state, loading:false, book:actions.book};
	case booksConstants.ADD_BOOK_FAILURE:
		return {...state, loading:false, error:actions.error};
	default:
		return state;
	}
}

export function editingBook(state = {
	loading: false,
	book: {},
	error:{}
}, action){
	switch(action.type){
		case booksConstants.EDIT_BOOK_REQUEST:
			return {...state, loading:true, editing:true};
		case booksConstants.EDIT_BOOK_SUCCESS:
			return {...state, loading:false, book:action.book};
		case booksConstants.EDIT_BOOK_FAILURE:
			return {...state, loading:false, error:action.error}
		default:
			return state;
	}
}

export function deletingBookReducer(state = {
	loading: false,
	book_id: "",
	books: [],
	error: {}
}, action){
	switch (action.type){
		case booksConstants.DELETE_BOOK_REQUEST:
			return {...state, loading:true}
		case booksConstants.DELETE_BOOK_SUCCESS:
			return {...state, loading:false, book_id:action.book_id};
		case booksConstants.DELETE_BOOK_FAILURE:
			return {...state, loading:false, error:action.error};
		default:
			return state;
	}
}
