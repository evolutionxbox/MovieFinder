import React from 'react';
import ReactDOM from 'react-dom';
import MovieFinder from './MovieFinder';
import './normalize.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MovieFinder />, document.getElementById('root'));
registerServiceWorker();
