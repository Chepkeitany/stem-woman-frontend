
import types from '../actions/heroines';

const initialState = {
    test: true
}
const heroines = (state = initialState, {type, payload } ) => {

    switch(type) {
        case types.FETCH_HEROINES:
            return {
                ...state,
                loading: true
        };
        case types.SET_ACTIVE_HEROINES:
            return {
                ...state,
                active: payload.active,
                loading: false
        }
        case types.SET_HEROINES_DATA:
            return {
                ...state,
                ...payload
            }
        default:
            return state;
    }
};

export default heroines;