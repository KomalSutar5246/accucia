import axios from "../helpers/axios";
import { 
    productConstants, 
    categoryConstants , 
    orderConstants,
       } from "../actions/constants";

export const getInitialData = () => {
    return async dispatch => {
        
        const res = await axios.post(`/initialData`);
        console.log(res);
        if(res.status === 200){
            const { categories, products, orders} = res.data
            dispatch({
                type: categoryConstants.GET_ALL_CATEGORIES_SUCCESS,
                payload: { categories },
            });
            dispatch({
                type: productConstants.GET_ALL_PRODUCTS_SUCCESS,
                payload: { products },
            });
            dispatch({
                type: orderConstants.GET_CUSTOMER_ORDER_SUCCESS,
                payload: { orders },
            });

        }
        console.log(res);
    };
};