import {combineReducers} from "redux";

import {registration, login, logoutReducer} from "./userReducer";
import {borrowReducer, returnBookReducer, borrowHistoryReducer, unReturnedBooksReducer} from "./borrowReducers";
import {getBooks, addBook, gettingBook, editingBook, deletingBookReducer} from "./booksReducers";
import {alert} from "./alertReducer";

const rootReducer = combineReducers({
	registration,
	login,
	logoutReducer,
	alert,
	borrowReducer,
	returnBookReducer,
	borrowHistoryReducer,
	unReturnedBooksReducer,
	getBooks,
	gettingBook,
	editingBook,
	addBook,
	deletingBookReducer
});

export default rootReducer;
