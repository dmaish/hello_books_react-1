/**
 * It contains all fetch requests services for add book,
 * edit book, get book, delete book and get books
 */

import { accessToken } from '../helpers/token';

function handleResponse(response) {
  if (!response.ok) {
    return Promise.reject(response.json());
  }
  return response.json();
}
function addBook(book) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      AccessControlAllowOrigin: 'https://stark-falls-93345.herokuapp.com',
      Authorization: `Bearer ${accessToken().access_token}`,
    },
    body: JSON.stringify(book),
  };
  return fetch('https://stark-falls-93345.herokuapp.com/books', requestOptions).then(
    handleResponse,
  );
}

function editBook(bookData) {
  const book_id = bookData.book_id;
  const requestOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      AccessControlAllowOrigin: 'https://stark-falls-93345.herokuapp.com',
      Authorization: `Bearer ${accessToken().access_token}`,
    },
    body: JSON.stringify(bookData),
  };
  return fetch(`https://stark-falls-93345.herokuapp.com/books/${book_id}`, requestOptions).then(
    handleResponse,
  );
}

function getBooks(page) {
  const requestOptions = {
    method: 'GET',
  };
  return fetch(`https://stark-falls-93345.herokuapp.com/books?page=${page}`, requestOptions).then(
    handleResponse,
  );
}

export const featuredbooksService = () => {
  const requestOptions = {
    method: 'GET',
  };
  return fetch('https://stark-falls-93345.herokuapp.com/books/eightbooks', requestOptions).then(
    handleResponse,
  );
};

function deleteBook(book_id) {
  const requestOptions = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken().access_token}`,
    },
  };
  return fetch(`https://stark-falls-93345.herokuapp.com/books/${book_id}`, requestOptions).then(
    handleResponse,
  );
}

export const booksServices = {
  addBook,
  getBooks,
  editBook,
  deleteBook,
};
