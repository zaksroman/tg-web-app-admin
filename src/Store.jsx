import { createStore, applyMiddleware }  from 'redux';
import thunk from 'redux-thunk';

const initialState = {
    data: [],
    sortBy: null,
    sortOrder: 'asc'
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_DATA':
            return {
                ...state,
                data: [...action.payload],
                sortBy: null,
                sortOrder: 'asc'
            };
        case 'ADD_ROW':
            return {
                ...state,
                data: [...state.data, action.payload]
            };
        case 'SET_SORT_BY':
            return {
                ...state,
                sortBy: action.payload
            };
        case 'SET_SORT_ORDER':
            return {
                ...state,
                sortOrder: action.payload
            };
        case 'CLEAR_DATA':
            return {
                ...state,
                data: state.data = []
            };
        case 'DELETE_ROW':
            return {
                ...state,
                data: state.data.filter(item => item.name !== action.payload)
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