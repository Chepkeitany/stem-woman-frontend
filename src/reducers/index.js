import { combineReducers } from 'redux';
import heroines from './heroines';
import user from './user';

const rootReducer = combineReducers({
    heroines,
    user
});

export default rootReducer;