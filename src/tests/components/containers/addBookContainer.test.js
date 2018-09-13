import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import storage from 'mock-local-storage';
import store from '../../../store';
import AddBookContainer from '../../../components/containers/addBookContainer';

it('renders without crashing', () => {
  const addBookContainer = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <AddBookContainer />
      </BrowserRouter>
    </Provider>,
    addBookContainer,
  );
  ReactDOM.unmountComponentAtNode(addBookContainer);
});
