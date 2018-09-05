/**
 *  Action triggerred when searching for a book
 */

import { searchTypes } from './searchTypes';
import { alertActions } from './alertActions';
import { searchServices } from '../services/searchServices';
import notify from '../helpers/notify';

const searchRequest = () => ({
  type: searchTypes.SEARCH_REQUEST,
});

const searchSuccess = books => ({
  type: searchTypes.SEARCH_SUCCESS,
  books,
});

const searchError = error => ({
  type: searchTypes.SEARCH_ERROR,
  error,
});
const searchAction = () => (dispatch) => {
  dispatch(searchRequest());
  searchServices().then(
    (books) => {
      dispatch(searchSuccess(books));
      notify('success', 'Success', books.message);
    },
    (error) => {
      error.then((response) => {
        dispatch(searchError(error));
        dispatch(alertActions.error(response.error));
        notify('error', 'Error', response.error);
      });
    },
  );
};

export default searchAction;
