import {combineReducers} from "redux";

import {registration, login, logggingout} from "./userReducer";
import {borrow, returnBook, borrowHistory, unReturnedBooks} from "./borrowReducers";
import {getBooks, addBook} from "./booksReducers";
import {alert} from "./alertReducer";

const rootReducer = combineReducers({
	registration,
	login,
	logggingout,
	alert,
	borrow,
	returnBook,
	borrowHistory,
	unReturnedBooks,
	getBooks,
	addBook
});

export default rootReducer;
