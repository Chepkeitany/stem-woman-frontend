
import types from '../actions/conferences';

const initialState = { loading: false };
const conferences = (state = initialState, {type, payload } ) => {

    switch(type) {
        case types.FETCH_CONFERENCES:
            return {
                ...state,
                loading: true
        };
        case types.SET_CONFERENCES:
            return {
                ...state,
                ...payload,
                loading: false
            }
        default:
            return state;
    }
};

export default conferences;
