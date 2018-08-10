import expect from "expect";
import {booksConstants} from "../../actions/actionTypes";
import {getBooks, gettingBook, addBook, editingBook, deletingBookReducer} from "../../reducers/booksReducers";

describe("Books reducers", () => {
	it("gets books and should return state", () => {
		expect(getBooks(undefined, {})).toEqual(
			{
				loading:false,
				books:[],
				errors:{}
			}
		);
	});
	it("get books should handle booksConstants.BOOKS_REQUEST", () => {
		expect(getBooks([], {
			type: booksConstants.BOOKS_REQUEST,
			loading:true
		})).toEqual({
			loading:true
		});
	});
	it("get books should handle booksConstants.BOOKS_SUCCESS", () => {
		expect(getBooks([], {
			type: booksConstants.BOOKS_SUCCESS,
			books:[],
			loading:false
		})).toEqual({
			books:[],
			loading:false
		});
	});
	it("get books should handle booksConstants.BOOKS_FAILURE", () => {
		expect(getBooks([], {
			type: booksConstants.BOOKS_FAILURE,
			loading:false,
			errors:undefined
		})).toEqual({
			loading:false,
			errors:undefined
		});
	});

	it("gets book and should return state", () => {
		expect(gettingBook(undefined, {})).toEqual(
			{
				loading:false,
				book:{},
				error:{}
			}
		);
	});
	it("get book should handle booksConstants.SINGLE_BOOK_REQUEST", () => {
		expect(gettingBook([], {
			type: booksConstants.SINGLE_BOOK_REQUEST,
			loading:true
		})).toEqual({
			loading:true
		});
	});
	it("get book should handle booksConstants.SINGLE_BOOK_SUCCESS", () => {
		expect(gettingBook([], {
			type: booksConstants.SINGLE_BOOK_SUCCESS,
			loading:false,
			book:{}
		})).toEqual({
			book:{},
			loading:false
		});
	});
	it("get book should handle booksConstants.SINGLE_BOOK_FAILURE", () => {
		expect(gettingBook([], {
			type: booksConstants.SINGLE_BOOK_FAILURE,
			loading:false,
			error:{}
		})).toEqual({
			loading:false,
			error:{}
		});
	});

	it("Add book and should return state", () => {
		expect(addBook(undefined, {})).toEqual(
			{
				loading: false,
				book: {},
				error: {}
			}
		);
	});
	it("add a book and should handle booksConstants.ADD_BOOK_REQUEST", () => {
		expect(addBook([], {
			type: booksConstants.ADD_BOOK_REQUEST,
			loading:true
		})).toEqual({
			loading:true
		});
	});
	it("adds book should handle booksConstants.ADD_BOOK_SUCCESS", () => {
		expect(addBook([], {
			type: booksConstants.ADD_BOOK_SUCCESS,
			loading: false,
			book: {}
		})).toEqual({
			loading: false,
			book: {}
		});
	});
	it("adds book should handle booksConstants.ADD_BOOK_FAILURE", () => {
		expect(addBook([], {
			type: booksConstants.ADD_BOOK_FAILURE,
			loading:false,
			error:{}
		})).toEqual({
			loading:false,
			error:{}
		});
	});

	it("edit a book and should return state", () => {
		expect(editingBook(undefined, {})).toEqual(
			{
				loading: false,
				book: {},
				error: {}
			}
		);
	});
	it("edit a book and should handle booksConstants.EDIT_BOOK_REQUEST", () => {
		expect(editingBook([], {
			type: booksConstants.EDIT_BOOK_REQUEST,
			loading:true
		})).toEqual({
			loading:true
		});
	});
	it("edit a book should handle booksConstants.EDIT_BOOK_SUCCESS", () => {
		expect(editingBook([], {
			type: booksConstants.EDIT_BOOK_SUCCESS,
			loading: false,
			book: {}
		})).toEqual({
			loading: false,
			book: {}
		});
	});
	it("edit a book should handle booksConstants.EDIT_BOOK_FAILURE", () => {
		expect(editingBook([], {
			type: booksConstants.EDIT_BOOK_FAILURE,
			loading:false,
			error:{}
		})).toEqual({
			loading:false,
			error:{}
		});
	});

	it("delete a book and should return state", () => {
		expect(deletingBookReducer(undefined, {})).toEqual(
			{
				loading: false,
				book_id: undefined,
				books: [],
				error: {}
			}
		);
	});
	it("delete a book and should handle booksConstants.DELETE_BOOK_REQUEST", () => {
		expect(deletingBookReducer([], {
			type: booksConstants.DELETE_BOOK_REQUEST,
			loading:true
		})).toEqual({
			loading:true
		});
	});
	it("delete a book should handle booksConstants.DELETE_BOOK_SUCCESS", () => {
		expect(deletingBookReducer([], {
			type: booksConstants.DELETE_BOOK_SUCCESS,
			loading: false,
			book_id: 1234
		})).toEqual({
			loading: false,
			book_id: 1234
		});
	});
	it("delete a book should handle booksConstants.DELETE_BOOK_FAILURE", () => {
		expect(deletingBookReducer([], {
			type: booksConstants.DELETE_BOOK_FAILURE,
			loading:false,
			error:{}
		})).toEqual({
			loading:false,
			error:{}
		});
	});
});
