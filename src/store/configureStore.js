import { configureStore, combineReducers } from "@reduxjs/toolkit";
import expenseReducer from '../reducers/expenseReducer';
import filtersReducer from '../reducers/filterReducer';


// Combine Reducers and Setup Store
const rootReducer = combineReducers({
    expenses: expenseReducer,
    filters: filtersReducer
});

export default () => {
    const store = configureStore({
        reducer: rootReducer
    });

    return store;
};
