/**
 * It contains all fetch requests services for search books
 */

import { accessToken } from '../helpers/token';

export const searchServices = (search) => {
  const requestOptions = {
    method: 'GET',
    headers: { Authorization: `Bearer ${accessToken().access_token}` },
  };
  return fetch(
    `https://stark-falls-93345.herokuapp.com/books/search?q=${search}`,
    requestOptions,
  ).then(handleResponse);
};

function handleResponse(response) {
  if (!response.ok) {
    return Promise.reject(response.json());
  }
  return response.json();
}
