import {combineReducers} from "redux";

import {registration} from "./userReducer";
import {alert} from "./alertReducer";

const rootReducer = combineReducers({
  registration,
  alert,
})

export default rootReducer;
