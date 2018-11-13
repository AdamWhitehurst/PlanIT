import { combineReducers } from 'redux';

import todo_reducer from './todo_reducer';

//In case we need additional reducers later on.
export default combineReducers({
    todo_reducer,    
});