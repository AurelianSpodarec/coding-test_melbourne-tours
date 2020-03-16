import redux from 'redux';
import { getMalibourneTours } from '../../services/api/tours';
// const createStore

const initialState = {
    loading: false,
    tours: [],
    page: 0,
    error: ''
}

const FETCH_TOURS_REQUEST = 'FETCH_TOURS_REQUEST';
const FETCH_TOURS_SUCCESS = 'FETCH_TOURS_SUCCESS';
const FETCH_TOURS_FAILURE = 'FETCH_TOURS_FAILURE';

const fetchToursRequest = () => {
    return {
        type: FETCH_TOURS_REQUEST
    }
}

const fetchTours = () => {
    return function (dispatch) {
        const tour = getMalibourneTours()
        console.log('Redux fetch tours', tour)
    }
}