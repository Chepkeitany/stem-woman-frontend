
import types from '../actions/heroines';

const initialState = {
    test: true
}
const heroines = (state = initialState, {type, payload } ) => {

    switch(type) {
        case types.FETCH_HEROINES:
            return {
                ...state
            };
        case types.SET_ACTIVE_HEROINES:
            return {
                ...state,
                active: payload.heroines.active
            }
        default:
            return state;
    }
};

export default heroines;