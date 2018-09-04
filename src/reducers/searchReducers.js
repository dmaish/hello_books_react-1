/**
 * It contains search for a book reducer
 */

import { searchTypes } from '../actions/searchTypes';

export function searchReducers(
  state = {
    loading: false,
    books: [],
    error: {},
  },
  actions,
) {
  switch (actions.type) {
    case searchTypes.SEARCH_REQUEST:
      return { ...state, loading: true };
    case searchTypes.SEARCH_SUCCESS:
      return { ...state, books: state.books, loading: false };
    case searchTypes.SEARCH_ERROR:
      return { ...state, error: state.error, loading: false };
    default:
      return state;
  }
}
