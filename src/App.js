/**
 * Setting the routes of the application
 */

// External(npm modules) and internal(Component) imports
import React from 'react';
import { Router, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Landing from './components/landing';
import { history } from './helpers/history';
import SignUpContainer from './components/containers/signupContainer';
import LoginContainer from './components/containers/loginContainer';
import AllBooks from './components/containers/booksContainer';
import AdminDashboard from './components/dashboard/adminDashboard';
import UserDashboard from './components/dashboard/userDashboard';
import AddBookContainer from './components/containers/addBookContainer';
import SingleBook from './components/page/singleBook';
import EditBook from './components/containers/editContainer';
import BorrowHistory from './components/borrow/borrowingHistory';
import PrivateRoute from './helpers/privateRoutes';
import UsersList from './components/containers/usersListContainer';
import ResetPasswordContainer from './components/containers/resetPasswordContainer';
import 'react-toastify/dist/ReactToastify.css';

const Application = () => (
  <div>
    <Router history={history}>
      <div>
        <Route exact path="/" component={Landing} />
        <Route path="/auth/register" component={SignUpContainer} />
        <Route path="/auth/login" component={LoginContainer} />
        <Route exact path="/books" component={AllBooks} />
        <PrivateRoute path="/dashboard" component={UserDashboard} />
        <PrivateRoute path="/secret/admin/dashboard" component={AdminDashboard} />
        <PrivateRoute path="/secret/admin/addbook" component={AddBookContainer} />
        <Route path="/books/:book_id" component={SingleBook} />
        <PrivateRoute path="/secret/admin/books/:book_id" component={EditBook} />
        <PrivateRoute exact path="/users/books" component={BorrowHistory} />
        <PrivateRoute path="/admin/users" component={UsersList} />
        <Route path="/auth/reset-password" component={ResetPasswordContainer} />
        <ToastContainer />
      </div>
    </Router>
  </div>
);
export default Application;
