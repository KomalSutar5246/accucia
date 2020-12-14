import categoryReducer from './category.reducers';
import productReducer from './product.reducers';
import cartReducer from './cart.reducer';
import authReducer from './auth.reducer';
import userReducer from './user.reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    
    category: categoryReducer,
    product: productReducer,
    auth: authReducer,
    cart: cartReducer,
    user: userReducer
    
});

export default rootReducer;