import {combineReducers} from "redux";

import {registration, login, logout} from "./userReducer";
import {borrowReducer, returnBookReducer, borrowHistoryReducer, unReturnedBooks} from "./borrowReducers";
import {getBooks, addBook, gettingBook, editingBook, deletingBookReducer} from "./booksReducers";
import {alert} from "./alertReducer";

const rootReducer = combineReducers({
	registration,
	login,
	logout,
	alert,
	borrowReducer,
	returnBookReducer,
	borrowHistoryReducer,
	unReturnedBooks,
	getBooks,
	gettingBook,
	editingBook,
	addBook,
	deletingBookReducer
});

export default rootReducer;
