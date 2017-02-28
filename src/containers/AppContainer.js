import React from 'react';
import {render} from 'react-dom';
import Counter from '../Counter'
import {Provider} from 'react-redux';
import store from '../store/store'
import MainComponent from '../MainComponent'
import AnotherComponent from '../AnotherComponent'

import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

import main from '../css/main.css';
const history = syncHistoryWithStore(browserHistory, store);
render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={MainComponent}>
        <IndexRoute component={Counter}/>
        <Route path="test" component={AnotherComponent}/>
      </Route>
    </Router>
  </Provider>,
document.getElementById("app")
);
