import {combineReducers} from "redux";

import {registration, login, logggingout} from "./userReducer";
import {alert} from "./alertReducer";

const rootReducer = combineReducers({
	registration,
	login,
	logggingout,
	alert,
});

export default rootReducer;
