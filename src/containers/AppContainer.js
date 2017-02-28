import React from 'react';
import {render} from 'react-dom';
// import Counter from '../routes/counter/components/Counter'
import {Provider} from 'react-redux';
import store from '../store/store'
// import Home from '../Home'
// import AnotherComponent from '../routes/testcomponent/components/AnotherComponent'

import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

import main from '../css/main.css';
const history = syncHistoryWithStore(browserHistory, store);
const routes = require('../routes/index').default(store);

render(
  <Provider store={store}>
    <Router history={history} children={routes}>

    </Router>
  </Provider>,
document.getElementById("app")
);

//
// <Route path="/" component={Home}>
//   <IndexRoute component={Counter}/>
//   <Route path="test" component={AnotherComponent}/>
// </Route>