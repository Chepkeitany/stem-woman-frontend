import { combineReducers } from 'redux';
import heroines from './heroines';
import mentors from './mentors';
import user from './user';

const rootReducer = combineReducers({
    heroines,
    mentors,
    user
});

export default rootReducer;