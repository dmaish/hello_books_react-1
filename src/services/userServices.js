/**
 * It contains all fetch requests services for:
 * register, login, logout and reset password
 */

import { accessToken } from '../helpers/token';

export const userServices = {
  register,
  login,
  logout,
};

function register(user) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  };
  return fetch('https://stark-falls-93345.herokuapp.com/auth/register', requestOptions).then(
    handleResponse,
  );
}

function login(user) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  };
  return fetch('https://stark-falls-93345.herokuapp.com/auth/login', requestOptions).then(
    handleResponse,
  );
}

function logout() {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      AccessControlAllowOrigin: 'https://stark-falls-93345.herokuapp.com',
      Authorization: `Bearer ${accessToken().access_token}`,
    },
  };
  return fetch('https://stark-falls-93345.herokuapp.com/auth/logout', requestOptions).then(
    handleResponse,
  );
}
// Method to reset the user password
export const resetPassword = (user) => {
  // Define the request methods
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  };
  return fetch('https://stark-falls-93345.herokuapp.com/auth/reset-password', requestOptions).then(
    handleResponse,
  );
};
// Function to fetch user profile
export const userProfile = () => {
  // Pass the request options required to the server
  const requestOptions = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken().access_token}`,
    },
  };
  // Use fetch to make request to profile endpoint and pass the requests above
  return fetch('https://stark-falls-93345.herokuapp.com/auth/profile', requestOptions).then(
    handleResponse,
  );
};

// Main function to handle response from the server
function handleResponse(response) {
  if (!response.ok) {
    return Promise.reject(response.json());
  }
  return response.json();
}
