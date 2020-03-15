import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './views/Layout';

import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import allReducer from './store/reducers';
import { Provider } from 'react-redux';


const store = createStore(allReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <Layout />
    </Provider>,
    document.getElementById('root'));