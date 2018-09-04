/**
 *  The headern container of the application landing page
 */

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
    <div className="col-md-5 p-lg-5 mx-auto my-5">
      <h1 className="display-4 font-weight-normal">Hello Books Library</h1>
      <p className="lead font-weight-normal">
        This is a library management system that helps you find books and rent books easily. With
        this system, you are able to sign up free and manage your borrowing.
      </p>
      <div
        className="btn-toolbar d-inline mx-auto center"
        role="toolbar"
        aria-label="Toolbar with button groups"
      >
        <div className="btn-group mr-2" role="group" aria-label="First group">
          <Link to="/auth/register">
            <button className="btn btn-primary">Register</button>
          </Link>
        </div>
        <div className="btn-group" role="group" aria-label="Third group">
          <Link to="/auth/login">
            <button type="button" className="btn btn-secondary">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
