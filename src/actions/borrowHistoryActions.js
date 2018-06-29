import {borrowConstants} from "./borrowTypes";
import {borrowServices} from "../services/borrowServices";
import {alertActions} from "./alertActions";
import {history} from "../helpers/history";

export const borrowHistory = {
  borrowHistory,
  unReturnedBooks
}


function borrowHistory() {
	return dispatch => {
		dispatch(requestHistory);
	};
}

function unReturnedBooks(){

}
