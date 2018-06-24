import {combineReducers} from "redux";

import {registration, login, logggingout} from "./userReducer";
import {borrow, returnBook, borrowHistory, unReturnedBooks} from "./borrowReducers";
import {alert} from "./alertReducer";

const rootReducer = combineReducers({
	registration,
	login,
	logggingout,
	alert,
	borrow,
	returnBook,
	borrowHistory,
	unReturnedBooks
});

export default rootReducer;
