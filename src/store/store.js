import {createStore, combineReducers} from 'redux';
import counterApp from './reducer';
import {routerReducer} from 'react-router-redux';

const store = createStore(combineReducers(
  {
  counterApp,
  routing: routerReducer
}
), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store;