import { combineReducers } from 'redux';
import conferences from './conferences';
import heroines from './heroines';
import mentors from './mentors';
import scholarships from './scholarships';
import resources from './resources';
import user from './user';

const rootReducer = combineReducers({
    conferences,
    heroines,
    mentors,
    scholarships,
    resources,
    user
});

export default rootReducer;