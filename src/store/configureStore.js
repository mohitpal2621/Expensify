import { combineReducers, configureStore } from "@reduxjs/toolkit";
import expenseReducer from '../reducers/expenseReducer';
import filtersReducer from '../reducers/filterReducer';


const rootreducer = combineReducers({
    expenses: expenseReducer,
    filters: filtersReducer
})

export default () => {
    const store = configureStore({
        reducer: rootreducer
    });

    return store;
};
