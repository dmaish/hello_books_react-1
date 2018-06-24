export const booksServices = {
  addBook,
  editBook,
  deleteBook,
  getBooks,
  getBook
}

function addBook(bookDetails) {
  const requestOptions = {
    method: "POST",
    headers: {'Content-Type': "application/json"},
    body: JSON.stringify(bookDetails)
  };
  return fetch('https://stark-falls-93345.herokuapp.com/books/',
  requestOptions)
  .then(handleResponse)
}

function editBook(book_id) {
  const requestOptions = {
    method: "PUT",
    headers: {'Content-Type': "application/json"},
    body: JSON.stringify(bookDetails)
  };
  return fetch('https://stark-falls-93345.herokuapp.com/books/<book_id>'/,
  requestOptions)
  .then(handleResponse)
}

function deleteBook(book_id)

function handleResponse(response) {
  if(!response.ok) {
    return Promise.reject(response.statusText)
  }
  return response.json()
}
