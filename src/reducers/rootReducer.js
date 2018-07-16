import {combineReducers} from "redux";

import {registration, login, logout} from "./userReducer";
import {borrow, returnBook, borrowHistory, unReturnedBooks} from "./borrowReducers";
import {getBooks, addBook, gettingBook, editingBook, deletingBookReducer} from "./booksReducers";
import {alert} from "./alertReducer";

const rootReducer = combineReducers({
	registration,
	login,
	logout,
	alert,
	borrow,
	returnBook,
	borrowHistory,
	unReturnedBooks,
	getBooks,
	gettingBook,
	editingBook,
	addBook,
	deletingBookReducer
});

export default rootReducer;
