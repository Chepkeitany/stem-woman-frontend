
import types from '../actions/resources';

const initialState = { loading: false };
const resources = (state = initialState, {type, payload } ) => {

    switch(type) {
        case types.FETCH_RESOURCES:
            return {
                ...state,
                loading: true
        };
        case types.SET_RESOURCES:
            return {
                ...state,
                ...payload,
                loading: false
            }
        default:
            return state;
    }
};

export default resources;
