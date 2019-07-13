
import types from '../actions/mentors';

const initialState = { loading: false, mentors: [] };
const mentors = (state = initialState, {type, payload } ) => {

    switch(type) {
        case types.FETCH_MENTORS:
            return {
                ...state,
                loading: true
        };
        case types.SET_MENTORS:
        console.log(mentors);
            return {
                ...state,
                ...payload,
                loading: false
            }
        default:
            return state;
    }
};

export default mentors;