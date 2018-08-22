/**
*  Action triggerred when searching for a book
*/

import {searchTypes} from "./searchTypes";
import {alertActions} from "./alertActions";
import {searchServices} from "../services/searchServices";

const searchAction = () => {
	return dispatch => {
		dispatch(searchRequest());
		searchServices()
			.then(
				books => {
					dispatch(searchSuccess(books));
					dispatch(alertActions.success(books.message));
				},
				error => {
					error.then(response => {
						dispatch(searchError(error));
						dispatch(alertActions.error(response.error));
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
