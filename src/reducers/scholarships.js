
import types from '../actions/scholarships';

const initialState = { loading: false };
const scholarships = (state = initialState, {type, payload } ) => {

    switch(type) {
        case types.FETCH_SCHOLARSHIPS:
            return {
                ...state,
                loading: true
        };
        case types.SET_SCHOLARSHIPS:
            return {
                ...state,
                ...payload,
                loading: false
            }
        default:
            return state;
    }
};

export default scholarships;
