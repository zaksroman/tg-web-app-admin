import { createStore, applyMiddleware }  from 'redux';
import thunk from 'redux-thunk';
// import products from "./Products";

const initialState = {
    products: []
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return {
                ...state,
                products: [...action.payload],
            };
        // case 'ADD_PRODUCT':
        //     return {
        //         ...state,
        //         products: [action.payload, ...state.products]
        //     };
        case 'DELETE_PRODUCT':
            return {
                ...state,
                products: state.products.filter(item => item.title !== action.payload)
            };

        default:
            return state;
    }
}

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;