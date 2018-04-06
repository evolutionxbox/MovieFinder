import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MovieFinder from './MovieFinder';
import './styles/normalize.css';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <MovieFinder />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
