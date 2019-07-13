import { combineReducers } from 'redux';
import heroines from './heroines';
import mentors from './mentors';
import scholarships from './scholarships';
import user from './user';

const rootReducer = combineReducers({
    heroines,
    mentors,
    scholarships,
    user
});

export default rootReducer;