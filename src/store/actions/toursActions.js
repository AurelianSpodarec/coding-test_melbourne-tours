import redux from 'redux';
import { getMalibourneTours } from '../../services/api/tours';
// const createStore

// const initialState = {
//     loading: false,
//     tours: [],
//     page: 0,
//     error: ''
// }

// const FETCH_TOURS_REQUEST = 'FETCH_TOURS_REQUEST';
// const FETCH_TOURS_SUCCESS = 'FETCH_TOURS_SUCCESS';
// const FETCH_TOURS_FAILURE = 'FETCH_TOURS_FAILURE';

export const fetchToursRequest = (tours) => {
    return {
        type: 'FETCH_TOURS_REQUEST',
        payload: tours
    }
}

export function setTours(tours) {
    return dispatch => {

        dispatch({
            type: "FETCH_TOURS_REQUEST",
            payload: tours
        })
    }
}

// const fetchTours = () => {
//     return function (dispatch) {
//         const tour = getMalibourneTours()
//         console.log('Redux fetch tours', tour)
//     }
// }