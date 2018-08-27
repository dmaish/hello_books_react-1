/**
*  Action triggerred when searching for a book
*/

import {searchTypes} from "./searchTypes";
import {alertActions} from "./alertActions";
import {searchServices} from "../services/searchServices";
import {notify} from "../helpers/notify";

const searchAction = () => {
	return dispatch => {
		dispatch(searchRequest());
		searchServices()
			.then(
				books => {
					dispatch(searchSuccess(books));
					notify("success", "Success", books.message);
				},
				error => {
					error.then(response => {
						dispatch(searchError(error));
						dispatch(alertActions.error(response.error));
						notify("error", "Error", response.error);
					});
				}
			);
	};
};

const searchRequest = () => {
	return {
		type: searchTypes.SEARCH_REQUEST
	};
};

const searchSuccess = (books) => {
	return {
		type: searchTypes.SEARCH_SUCCESS,
		books
	};
};

const searchError = (error) => {
	return {
		type: searchTypes.SEARCH_ERROR,
		error
	};
};

export default searchAction;
