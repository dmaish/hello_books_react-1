/**
 *  The container contains navbar to be rendered in the landing page
 * Also rendered in any public urls
 */

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../common/logo.jpg';

const Nav = () => (
  <nav className="navbar navbar-light" id="top-line">
    <Link to="/" className="navbar-brand">
      <img
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="hello books logo"
      />
      Hello Books
    </Link>
    <ul className="nav justify-content-end">
      <li className="nav-item">
        <Link to="/books" className="nav-link">
          All Books
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/auth/register" className="nav-link">
          Sign Up
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/auth/login" className="nav-link">
          Log In
        </Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
