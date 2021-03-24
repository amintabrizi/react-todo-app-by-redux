import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { loadingBarMiddleware } from 'react-redux-loading-bar'


import reducer from './../reducers';

const initalState = {

}

const middleware = [thunk];

const store = createStore(reducer, initalState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;