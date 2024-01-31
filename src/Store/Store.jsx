import { createStore, applyMiddleware }  from 'redux';
import thunk from 'redux-thunk';
import products from "./Products";

const initialState = {
    products
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        // case 'SET_PRODUCTS':
        //     return {
        //         ...state,
        //         products: [...action.payload]
        //     };

        case 'ADD_PRODUCT':
            return {
                ...state,
                products: [action.payload, ...state.products]
            };

        case 'DELETE_PRODUCT':
            return {
                ...state,
                products: state.products.filter(item => item.title !== action.payload)
            };

        default:
            return state;
    }
}

function loadState() {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        console.error("Error loading state from localStorage:", err);
        return undefined;
    }
}

function saveState(state) {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch(err) {
        console.error("Error saving state to localStorage:", err);
    }
}

const savedState = loadState();

const store = createStore(rootReducer, savedState, applyMiddleware(thunk));

store.subscribe(() => {
    saveState(store.getState());
});

export default store;