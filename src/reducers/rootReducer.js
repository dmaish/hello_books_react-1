import {combineReducers} from "redux";

import {registration, login, logout} from "./userReducer";
import {alert} from "./alertReducer";

const rootReducer = combineReducers({
	registration,
	login,
	logout,
	alert,
});

export default rootReducer;
