import { combineReducers } from 'redux';
import conferences from './conferences';
import heroines from './heroines';
import mentors from './mentors';
import scholarships from './scholarships';
import user from './user';

const rootReducer = combineReducers({
    conferences,
    heroines,
    mentors,
    scholarships,
    user
});

export default rootReducer;