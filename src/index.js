import React from 'react';
import ReactDOM from 'react-dom';
import MovieFinder from './MovieFinder';
import './styles/normalize.css';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MovieFinder />, document.getElementById('root'));
registerServiceWorker();
