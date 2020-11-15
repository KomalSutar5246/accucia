// import { createStore } from "redux"

// export default (state = {name: 'komal'}, action ) => { 
//     return state;
// } 
import authReducer from './auth.reducers';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth: authReducer
});

export default rootReducer;