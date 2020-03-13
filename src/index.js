import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './views/Layout';

import { createStore } from 'redux';
import allReducer from './store/reducers';
import { Provider } from 'react-redux';

const store = createStore(allReducer);

ReactDOM.render(
    <Provider store={store}>
        <Layout />
    </Provider>,
    document.getElementById('root'));