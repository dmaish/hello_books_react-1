import expect from 'expect';
import { borrowConstants } from '../../actions/borrowTypes';
import {
  borrowReducer,
  returnBookReducer,
  borrowHistoryReducer,
  unReturnedBooksReducer,
} from '../../reducers/borrowReducers';

describe('Borrow reducers', () => {
  it('borrow book and should return state', () => {
    expect(borrowReducer(undefined, {})).toEqual({
      borrowing: false,
      book_id: '',
      error: {},
    });
  });
  it('borrow book should handle borrowConstants.BORROW_REQUEST', () => {
    expect(
      borrowReducer([], {
        type: borrowConstants.BORROW_REQUEST,
        borrowing: true,
      }),
    ).toEqual({
      borrowing: true,
    });
  });
  it('borrow book should handle borrowConstants.BORROW_SUCCESS', () => {
    expect(
      borrowReducer([], {
        type: borrowConstants.BORROW_SUCCESS,
        book_id: '',
        borrowing: false,
      }),
    ).toEqual({
      book_id: '',
      borrowing: false,
    });
  });
  it('borrow book should handle borrowConstants.BORROW_FAILURE', () => {
    expect(
      borrowReducer([], {
        type: borrowConstants.BORROW_FAILURE,
        borrowing: false,
        errors: undefined,
      }),
    ).toEqual({
      borrowing: false,
      errors: undefined,
    });
  });

  it('return book and should return state', () => {
    expect(returnBookReducer(undefined, {})).toEqual({
      returning: false,
      book_id: '',
      error: {},
    });
  });
  it('return book should handle borrowConstants.RETURN_REQUEST', () => {
    expect(
      returnBookReducer([], {
        type: borrowConstants.RETURN_REQUEST,
        returning: true,
      }),
    ).toEqual({
      returning: true,
    });
  });
  it('return book should handle borrowConstants.RETURN_SUCCESS', () => {
    expect(
      returnBookReducer([], {
        type: borrowConstants.RETURN_SUCCESS,
        returning: false,
        book_id: '',
      }),
    ).toEqual({
      book_id: '',
      returning: false,
    });
  });
  it('return book should handle borrowConstants.RETURN_FAILURE', () => {
    expect(
      returnBookReducer([], {
        type: borrowConstants.RETURN_FAILURE,
        returning: false,
        error: {},
      }),
    ).toEqual({
      returning: false,
      error: {},
    });
  });

  it('borrow history and should return state', () => {
    expect(borrowHistoryReducer(undefined, {})).toEqual({
      loading: false,
      books: [],
      error: {},
    });
  });
  it('borrow history and should handle borrowConstants.BORROW_HISTORY_REQUEST', () => {
    expect(
      borrowHistoryReducer([], {
        type: borrowConstants.BORROW_HISTORY_REQUEST,
        loading: true,
      }),
    ).toEqual({
      loading: true,
    });
  });
  it('borrow history should handle borrowConstants.BORROW_HISTORY_SUCCESS', () => {
    expect(
      borrowHistoryReducer([], {
        type: borrowConstants.BORROW_HISTORY_SUCCESS,
        loading: false,
        books: [],
      }),
    ).toEqual({
      loading: false,
      books: [],
    });
  });
  it('borrow history should handle borrowConstants.BORROW_HISTORY_FAILURE', () => {
    expect(
      borrowHistoryReducer([], {
        type: borrowConstants.BORROW_HISTORY_FAILURE,
        loading: false,
        error: {},
      }),
    ).toEqual({
      loading: false,
      error: {},
    });
  });

  it('unreturn books and should return state', () => {
    expect(unReturnedBooksReducer(undefined, {})).toEqual({
      loading: false,
      books: [],
      error: {},
    });
  });
});
