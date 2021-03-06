/**
 *  Contains all the types for borrow/authenticated user actions
 * This constains borrow, return and history action types
 */

export const borrowConstants = {
  BORROW_REQUEST: 'USERS_BORROW_REQUEST',
  BORROW_SUCCESS: 'USERS_BORROW_SUCCESS',
  BORROW_FAILURE: 'USERS_BORROW_FAILURE',
  RETURN_REQUEST: 'USERS_RETURN_REQUEST',
  RETURN_SUCCESS: 'USERS_RETURN_SUCCESS',
  RETURN_FAILURE: 'USERS_RETURN_FAILURE',
  BORROW_HISTORY_REQUEST: 'USERS_BORROW_HISTORY_REQUEST',
  BORROW_HISTORY_SUCCESS: 'USERS_BORROW_HISTORY_SUCCESS',
  BORROW_HISTORY_FAILURE: 'USERS_BORROW_HISTORY_FAILURE',
  UNRETURNED_REQUEST: 'USERS_UNRETURN_REQUEST',
  UNRETURNED_SUCCESS: 'USERS_UNRETURN_SUCCESS',
  UNRETURNED_FAILURE: 'USERS_UNRETURN_FAILURE',
};
