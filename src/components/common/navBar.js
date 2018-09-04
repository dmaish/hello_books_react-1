/**
 *  The application navbar container
 */

import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.jpg';

const NavBar = () => (
  <div>
    <nav className="navbar navbar-light" id="top-line">
      <Link to="/" className="navbar-brand">
        <img src={logo} width={30} height={30} className="d-inline-block align-top" alt="logo" />
        Hello Books
      </Link>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <Link to="/books" className="nav-link">
            ALL BOOKS
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/auth/register" className="nav-link">
            SIGN UP
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/auth/login" className="nav-link">
            LOG IN
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default NavBar;
