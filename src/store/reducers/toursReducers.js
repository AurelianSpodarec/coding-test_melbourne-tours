const INITIAL_STATE = {
    tours: [],
    searchQuery: {
        price: '-score',
    },
    total: 0,
    loading: false,
    error: ''
}

const toursReducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'FETCH_TOURS':
            return { tours: { ...state.tours, ...action.payload.data.tours } }
        case 'LOAD_TOURS_LOADING':
            return {
                ...state,
                loading: true,
                error: ''
            };
        case 'LOAD_TOURS_SUCCESS': {
            return {
                ...state,
                data: action.data,
                loading: false
            }
        }
        case 'LOAD_TOURS_ERROR': {
            return {
                ...state,
                loading: false,
                error: action.error
            };
        }
        default: {
            return state;
        }
    }
}

export default toursReducers;