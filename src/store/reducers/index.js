import { combineReducers } from 'redux';

import toursReducer from './toursReducers';

const allReducers = combineReducers({
    tours: toursReducer
})

export default allReducers;