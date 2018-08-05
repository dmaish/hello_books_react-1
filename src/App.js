/**
* Setting the routes of the application
*/

import React, { Component } from "react";
import {Router , Route} from "react-router-dom";
import {connect} from "react-redux";
import Landing from "./components/landing";
import {history} from "./helpers/history";
import SignUpContainer from "./components/containers/signupContainer";
import LoginContainer from "./components/containers/loginContainer";
import AllBooks from "./components/containers/booksContainer";
import AdminDashboard from "./components/dashboard/adminDashboard";
import UserDashboard from "./components/dashboard/userDashboard";
import AddBookContainer from "./components/containers/addBookContainer";
import SingleBook from "./components/page/singleBook";
import EditBook from "./components/containers/editContainer";
import BorrowHistory from "./components/borrow/borrowingHistory";
import {PrivateRoute} from "./helpers/privateRoutes";

class Application extends Component {
	render() {
		return (
			<div>
				<Router history={history}>
					<div>
						<Route exact path="/" component={Landing}></Route>
						<Route path="/api/v1/auth/register" component={SignUpContainer}></Route>
						<Route path="/api/v1/auth/login" component={LoginContainer}></Route>
						<Route exact path="/api/v1/books" component={AllBooks}></Route>
						<PrivateRoute path="/api/v1/dashboard" component={UserDashboard}></PrivateRoute>
						<PrivateRoute path="/api/v1/secret/admin/dashboard" component={AdminDashboard}></PrivateRoute>
						<PrivateRoute path="/api/v1/secret/admin/addbook" component={AddBookContainer}></PrivateRoute>
						<Route path="/api/v1/books/:book_id" component={SingleBook}></Route>
						<PrivateRoute path="/api/v1/secret/admin/books/:book_id" component={EditBook}></PrivateRoute>
						<PrivateRoute exact path="/api/v1/users/books" component={BorrowHistory}></PrivateRoute>
					</div>
				</Router>
			</div>
		);
	}
}

export default Application;
