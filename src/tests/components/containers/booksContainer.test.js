import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import storage from 'mock-local-storage';
import store from '../../../store';
import AllBooks from '../../../components/containers/booksContainer';

it('renders without crashing', () => {
  const allBooksDiv = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <AllBooks />
      </BrowserRouter>
    </Provider>,
    allBooksDiv,
  );
  ReactDOM.unmountComponentAtNode(allBooksDiv);
});
