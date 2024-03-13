import { configureStore } from "@reduxjs/toolkit";

const counterReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return { ...state, count: state.count + incrementBy };
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1; 
            return { ...state, count: state.count - decrementBy };
        case 'RESET':
            return {count: 0};
        default:
            return state;
    }
};

const store = configureStore({
    reducer: counterReducer // Use your defined reducer
});

const unsub = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
});

store.dispatch({
    type: 'INCREMENT'
});

store.dispatch({
    type: 'RESET'
});

store.dispatch({
    type: 'DECREMENT',
});

store.dispatch({
    type: 'DECREMENT',
    decrementBy: 5
});