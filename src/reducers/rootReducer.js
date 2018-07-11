import {combineReducers} from "redux";

import {registration, login, logout} from "./userReducer";
import {borrow, returnBook, borrowHistory, unReturnedBooks} from "./borrowReducers";
import {getBooks, addBook, gettingBook} from "./booksReducers";
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
	addBook
});

export default rootReducer;
