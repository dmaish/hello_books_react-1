/**
*  Contains all the types actions for user, books,
* and user lists reducers/actions
*/

// Constansts actions types regarding the user functionalities
// Register, login, logout and reset password action types
export const userConstants = {
	REGISTER_REQUEST: "USERS_REGISTER_REQUEST",
	REGISTER_SUCCESS: "USERS_REGISTER_SUCCESS",
	REGISTER_FAILURE: "USERS_REGISTER_FAILURE",
	LOGIN_REQUEST: "USERS_LOGIN_REQUEST",
	LOGIN_SUCCESS: "USERS_LOGIN_SUCCESS",
	LOGIN_FAILURE: "USERS_LOGIN_FAILURE",
	LOGOUT_USER: "USERS_LOGOUT",
	LOGOUT_ERROR: "LOGOUT_ERROR",
	RESET_PASSWORD_REQUEST: "RESET_PASSWORD_REQUEST",
	RESET_PASSWORD_SUCCESS: "RESET_PASSWORD_SUCCESS",
	RESET_PASSWORD_FAILURE: "RESET_PASSWORD_FAILURE",
	USER_PROFILE_REQUEST: "USER_PROFILE_REQUEST",
	USER_PROFILE_SUCCESS: "USER_PROFILE_SUCCESS",
	USER_PROFILE_FAILURE: "USER_PROFILE_FAILURE"
};

// Action types for add, edit, delete, get books and get book
export const booksConstants = {
	BOOKS_REQUEST: "GET_BOOKS_REQUEST",
	BOOKS_SUCCESS: "GET_BOOKS_SUCCESS",
	BOOKS_FAILURE: "GET_BOOKS_FAILURE",
	ADD_BOOK_REQUEST: "ADD_BOOK_REQUEST",
	ADD_BOOK_SUCCESS: "ADD_BOOK_SUCCESS",
	ADD_BOOK_FAILURE: "ADD_BOOK_FAILURE",
	SINGLE_BOOK_REQUEST: "SINGLE_BOOK_REQUEST",
	SINGLE_BOOK_SUCCESS: "SINGLE_BOOK_SUCCESS",
	SINGLE_BOOK_FAILURE: "SINGLE_BOOK_FAILURE",
	DELETE_BOOK_REQUEST: "DELETE_BOOK_REQUEST",
	DELETE_BOOK_SUCCESS: "DELETE_BOOK_SUCCESS",
	DELETE_BOOK_FAILURE: "DELETE_BOOK_FAILURE",
	EDIT_BOOK_REQUEST: "EDIT_BOOK_REQUEST",
	EDIT_BOOK_SUCCESS: "EDIT_BOOK_SUCCESS",
	EDIT_BOOK_FAILURE: "EDIT_BOOK_FAILURE"
};

// Action types for getting list of users
export const usersListsTypes = {
	USERS_REQUEST: "USERS_LIST_REQUEST",
	USERS_SUCCESS: "USERS_LIST_SUCCESS",
	USERS_FAILURE: "USERS_LIST_FAILURE"
};
