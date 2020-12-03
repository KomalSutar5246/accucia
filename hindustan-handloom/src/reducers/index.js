import categoryReducer from './category.reducers';
import productReducer from './product.reducers';
import { combineReducers } from 'redux';
import authReducer from './auth.reducer';

const rootReducer = combineReducers({
    
    category: categoryReducer,
    product: productReducer,
    auth: authReducer,
    
});

export default rootReducer;