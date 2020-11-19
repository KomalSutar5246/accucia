// import { createStore } from "redux"

// export default (state = {name: 'komal'}, action ) => { 
//     return state;
// } 
import authReducer from './auth.reducers';
import userReducer from './user.reducer';
import categoryReducer from './category.reducers';
import productReducer from './product.reducer';
import orderReducer from './order.reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    category: categoryReducer,
    product: productReducer,
    order: orderReducer
});

export default rootReducer;