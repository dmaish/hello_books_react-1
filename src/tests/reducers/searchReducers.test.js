import expect from 'expect';
import { searchTypes } from '../../actions/searchTypes';
import { searchReducers } from '../../reducers/searchReducers';

describe('Books reducers', () => {
  it('search book and should return state', () => {
    expect(searchReducers(undefined, {})).toEqual({
      loading: false,
      books: [],
      error: {},
    });
  });
  it('search book should handle searchTypes.SEARCH_REQUEST', () => {
    expect(
      searchReducers([], {
        type: searchTypes.SEARCH_REQUEST,
        loading: true,
      }),
    ).toEqual({
      loading: true,
    });
  });
  it('borrow book should handle searchTypes.SEARCH_SUCCESS', () => {
    expect(
      searchReducers([], {
        type: searchTypes.SEARCH_SUCCESS,
        books: undefined,
        loading: false,
      }),
    ).toEqual({
      books: undefined,
      loading: false,
    });
  });
  it('borrow book should handle searchTypes.SEARCH_ERROR', () => {
    expect(
      searchReducers([], {
        type: searchTypes.SEARCH_ERROR,
        loading: false,
        error: undefined,
      }),
    ).toEqual({
      loading: false,
      error: undefined,
    });
  });
});
