/**
* This is alert reducers
* When there is any alert, this is the reducer called
*/

import {alertConstants} from "../actions/alertTypes";

export function alert(state = {}, {type, message}) {
	switch (type) {
	case alertConstants.SUCCESS:
		return {
			type: "alert-success",
			message: message
		};
	case alertConstants.ERROR:
		return {
			type: "alert-danger",
			message: message
		};
	case alertConstants.CLEAR:
		return {};
	default:
		return state;
	}
}
