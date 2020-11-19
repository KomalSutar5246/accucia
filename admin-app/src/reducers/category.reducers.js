import { categoryConstants } from '../actions/constants';


const initState  = {
    categoryList: [],
    loading: false,
    error: null
}

const rootReducer =  (state = initState, action) =>
 {
    switch(action.type){
        case categoryConstants.GET_ALL_CATEGORIES_SUCCESS:
            state = {
                ...state,
                loading: false,
                categoryList: action.payload.categoryList
            }
        break;
        case categoryConstants.GET_ALL_CATEGORIES_REQUEST:
            state = {
                ...state,
                loading: true,
            }
        break;
        // case categoryConstants.GET_ALL_CATEGORIES_SUCCESS:
        //     state = {
        //         ...state,
        //         loading: false,
        //     }
        // break;
        case categoryConstants.GET_ALL_CATEGORIES_FAILURE:
            state = {
                ...initState
            }
        break;
    }   

    return state;
}

export default rootReducer;