import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import CreatableDemo from './components/searchbar';

ReactDOM.render(
  <Router>
      <div>
        <Route exact path='/' component={App} />
        <Route path='/search' component={CreatableDemo} />
      </div>
  </Router>,
  document.getElementById('root')
);
