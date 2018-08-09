import expect from "expect";
import {booksConstants} from "../../actions/actionTypes";
import {getBooks, gettingBook} from "../../reducers/booksReducers";

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
});
