/**
Books actions tests
*/

import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import expect from "expect";
import storage from "mock-local-storage";
import nock from "nock";
import {booksConstants} from "../../actions/actionTypes";
import {booksActions, deleteBookAction} from "../../actions/booksActions";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Asyncs action to get books", () => {
	afterEach(() => {
		fetchMock.reset();
		fetchMock.restore();
	});

	it("Gets books", () => {
		const data = [];
		const expectedActions = [
			{type:booksConstants.BOOKS_REQUEST},
			{type:booksConstants.BOOKS_SUCCESS, body:{books: data}}
		];
		const store = mockStore({books:[]}, expectedActions);
		fetchMock.mock("*", { books: [] });
		store.dispatch(booksActions.getBooks());
	});
	it("Get a book", () => {
		const book = {};
		const expectedAction = [
			{type:booksConstants.SINGLE_BOOK_REQUEST},
			{type:booksConstants.SINGLE_BOOK_SUCCESS, body:{book:book}},
		];
		const store = mockStore({book:book}, expectedAction);
		fetchMock.mock("*", {book:book});
		store.dispatch(booksActions.getBook());
	});

	it("Adds a book", () => {
		const book = {};
		const expectedAction = [
			{type:booksConstants.ADD_BOOK_REQUEST},
			{type:booksConstants.ADD_BOOK_SUCCESS, body:{book:book}},
		];
		const store = mockStore({book:book}, expectedAction);
		fetchMock.mock("*", {book:book});
		store.dispatch(booksActions.addBook());
	});

	it("Edit a book", () => {
		const bookId = 1670;
		const expectedActions = [
			{type:booksConstants.EDIT_BOOK_REQUEST},
			{type:booksConstants.EDIT_BOOK_SUCCESS, body:{book:bookId}},
		];
		const store = mockStore({book:bookId}, expectedActions);
		fetchMock.mock("*", {book:bookId});
		store.dispatch(booksActions.editBook(bookId));
	});

	it("Delete a book", () => {
		const bookId = 3456;
		const expectedAction = [
			{type:booksConstants.DELETE_BOOK_REQUEST},
			{type:booksConstants.DELETE_BOOK, body:{book:bookId}},
		];
		const store = mockStore({book:bookId}, expectedAction);
		fetchMock.mock("*", {book:bookId});
		store.dispatch(deleteBookAction(bookId));
	});

});
