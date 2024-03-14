import { configureStore } from "@reduxjs/toolkit";

// Reducers (Pure functions)
const counterReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: state.count + action.incrementBy };
        case 'DECREMENT':
            return { ...state, count: state.count - action.decrementBy };
        case 'RESET':
            return { ...state, count: 0};
        case 'SET':
            return { ...state, count : action.setBy};
        default:
            return state;
    }
};

// Action Generators
const incrementCount = ( {incrementBy = 1} = {} ) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ( {decrementBy = 1} = {} ) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ( {setBy} ) => ({
    type: 'SET',
    setBy
});

const reset = () => ({
    type: 'RESET'
})


// Set up store with a reducer
const store = configureStore({
    reducer: counterReducer // Use your defined reducer
});

// Set up a subscription
const unsub = store.subscribe(() => {
    console.log(store.getState());
});

// Dispatch actions
store.dispatch( incrementCount( {incrementBy: 5} ) );

store.dispatch( incrementCount() );

store.dispatch( incrementCount() );

store.dispatch( reset() );

store.dispatch( decrementCount() );

store.dispatch( decrementCount( {decrementBy: 5} ) );

store.dispatch( setCount({setBy: 101}) );